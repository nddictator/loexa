// Table-based, inline-styled HTML — email clients (Outlook in particular)
// don't support flexbox/grid or external stylesheets, so this deliberately
// avoids both. Brand colours match tailwind.config.ts's navy/gold palette.

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

interface PillarInquiryEmailData {
  fullName: string;
  contactNo: string;
  whatsappContact: string;
  email: string;
  organization?: string;
  category: string;
  message?: string;
}

function detailRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 14px 0; border-bottom: 1px solid #EFEDF5;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #5B5470; padding-bottom: 4px;">
              ${label}
            </td>
          </tr>
          <tr>
            <td style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; font-weight: 600; color: #1A1330;">
              ${value}
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}

export function pillarInquiryEmailHtml(data: PillarInquiryEmailData) {
  const fullName = escapeHtml(data.fullName);
  const contactNo = escapeHtml(data.contactNo);
  const whatsappContact = escapeHtml(data.whatsappContact);
  const email = escapeHtml(data.email);
  const organization = escapeHtml(data.organization || "—");
  const category = escapeHtml(data.category);
  const message = escapeHtml(data.message || "").replace(/\n/g, "<br/>") || "—";

  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Pillar Enquiry</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #F7F6FA;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #F7F6FA; padding: 32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width: 560px; width: 100%; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid #EFEDF5;">
            <!-- Header -->
            <tr>
              <td style="background-color: #1B1440; padding: 32px 36px 28px;">
                <div style="height: 4px; width: 44px; background-color: #C9A227; border-radius: 2px; margin-bottom: 18px;"></div>
                <div style="font-family: Arial, Helvetica, sans-serif; font-size: 20px; font-weight: 800; letter-spacing: 0.06em; color: #FFFFFF;">
                  LOEXA <span style="color: #C9A227;">AFRICA</span>
                </div>
                <div style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #D9B94F; margin-top: 4px;">
                  Building Africa's Future Workforce
                </div>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding: 32px 36px 8px;">
                <div style="font-family: Arial, Helvetica, sans-serif; font-size: 20px; font-weight: 800; color: #2E1A5C; margin-bottom: 12px;">
                  New Pillar Enquiry
                </div>
                <div style="display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #2E1A5C; background-color: #FBF3DA; border: 1px solid #C9A227; border-radius: 999px; padding: 7px 16px; margin-bottom: 8px;">
                  ${category}
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding: 8px 36px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${detailRow("Full Name", fullName)}
                  ${detailRow("Email", `<a href="mailto:${email}" style="color: #2E1A5C; text-decoration: underline;">${email}</a>`)}
                  ${detailRow("Contact Number", contactNo)}
                  ${detailRow("WhatsApp Contact", whatsappContact)}
                  ${detailRow("Organization", organization)}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding: 20px 36px 32px;">
                <div style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #5B5470; padding-bottom: 8px;">
                  Message
                </div>
                <div style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.6; color: #1A1330; background-color: #F7F6FA; border-radius: 12px; padding: 16px 18px;">
                  ${message}
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color: #F7F6FA; padding: 18px 36px; border-top: 1px solid #EFEDF5;">
                <div style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #5B5470;">
                  Submitted via the LOEXA Africa website pillar pages.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
