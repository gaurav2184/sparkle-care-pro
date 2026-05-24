// Central business config — update these values to change site-wide info.
export const siteConfig = {
  name: "Trushna Disinfection Services",
  shortName: "TDS",
  phone: "+91 73812 14444",
  phoneRaw: "+917381214444",
  whatsapp: "917381214444", // country code + number, no + or spaces
  email: "trushnaventures@gmail.com",
  address: {
    line1: "Trushna Disinfection Services",
    line2: "Office address line — to be updated",
    city: "Berhampur",
    state: "Odisha",
    pincode: "760001",
    mapsEmbed: "", // paste Google Maps embed src once available
    mapsLink: "https://maps.google.com/?q=Berhampur,+Odisha",
  },
  serviceArea: "Across Odisha",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    justdial: "https://www.justdial.com/",
    google: "https://share.google/JFlWy7SZeeertKVns",
  },
  // Form delivery — replace these once you've created the endpoints.
  // 1. FormSubmit — visit https://formsubmit.co/ and confirm the email, then keep this as-is.
  formSubmitEndpoint: "https://formsubmit.co/ajax/trushnaventures@gmail.com",
  // 2. Google Form — create a Google Form with fields matching the names below,
  //    open the pre-fill link to grab the form ID + entry IDs, then update here.
  googleForm: {
    formId: "YOUR_GOOGLE_FORM_ID", // e.g. 1FAIpQLSeXXXXXXXXXXXXXXXXXXXXXX
    fields: {
      name: "entry.111111111",
      email: "entry.222222222",
      phone: "entry.333333333",
      services: "entry.444444444",
      otherService: "entry.555555555",
      message: "entry.666666666",
      address: "entry.777777777",
      city: "entry.888888888",
      date: "entry.999999999",
      area: "entry.101010101",
      source: "entry.121212121",
    },
  },
};

export const submitToBackends = async (data: Record<string, string>) => {
  const tasks: Promise<unknown>[] = [];

  // FormSubmit — email delivery
  if (siteConfig.formSubmitEndpoint && !siteConfig.formSubmitEndpoint.includes("YOUR_")) {
    tasks.push(
      fetch(siteConfig.formSubmitEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: `New ${data.source || "Website"} enquiry — TDS` }),
      }).catch((err) => console.warn("FormSubmit failed", err))
    );
  }

  // Google Form — spreadsheet logging
  const { formId, fields } = siteConfig.googleForm;
  if (formId && !formId.includes("YOUR_")) {
    const params = new URLSearchParams();
    Object.entries(fields).forEach(([key, entry]) => {
      if (data[key]) params.append(entry, data[key]);
    });
    tasks.push(
      fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse?${params.toString()}`, {
        method: "POST",
        mode: "no-cors",
      }).catch((err) => console.warn("Google Form failed", err))
    );
  }

  await Promise.all(tasks);
};