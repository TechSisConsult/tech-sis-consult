import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error('Resend not configured');
    }
    const resend = new Resend(apiKey);
    const body = await req.json();
    const { name, email, phone, company, budget, services, questions } = body;

    await resend.emails.send({
      from: 'TechSisConsult <hello@techsisconsult.com>',
      to: 'hello@techsisconsult.com',
      replyTo: email,
      subject: `New Strategy Call Request — ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8f8f6; margin: 0; padding: 24px; }
              .card { background: #ffffff; border-radius: 16px; padding: 32px; max-width: 560px; margin: 0 auto; border: 1px solid #e5e7eb; }
              .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #9ca3af; margin-bottom: 4px; }
              .value { font-size: 15px; font-weight: 600; color: #021823; margin-bottom: 20px; }
              .badge { display: inline-block; background: #d4a843; color: #021823; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; padding: 4px 12px; border-radius: 999px; margin-bottom: 24px; }
              .divider { height: 1px; background: #f3f4f6; margin: 20px 0; }
              .footer { font-size: 12px; color: #9ca3af; text-align: center; margin-top: 24px; }
              h2 { color: #021823; font-size: 22px; margin: 0 0 8px; }
              .reply-tip { background: #fffbf0; border: 1px solid #d4a84340; border-radius: 12px; padding: 16px; margin-top: 24px; font-size: 13px; color: #021823; line-height: 1.6; }
            </style>
          </head>
          <body>
            <section class="card">
              <div class="badge">Strategy Call Request</div>
              <h2>New Request from ${name}</h2>
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 24px;">
                Someone just requested a free strategy call. Reply to this email to confirm their slot.
              </p>

              <div class="divider"></div>

              <div class="label">Full Name</div>
              <div class="value">${name}</div>

              <div class="label">Email</div>
              <div class="value"><a href="mailto:${email}" style="color: #d4a843;">${email}</a></div>

              <div class="label">WhatsApp / Phone</div>
              <div class="value"><a href="https://wa.me/${phone?.replace(/[^0-9]/g, '')}" style="color: #25D366;">${phone || '—'}</a></div>

              <div class="label">Business / Company</div>
              <div class="value">${company || '—'}</div>

              <div class="label">Services Interested In</div>
              <div class="value">${services || '—'}</div>

              <div class="label">Budget</div>
              <div class="value">${budget || 'Not specified'}</div>

              <div class="label">Questions to Address</div>
              <div class="value" style="white-space: pre-line; font-weight: 400; color: #374151;">${questions || 'None provided'}</div>

              <div class="reply-tip">
                <strong>💡 Next step:</strong> Reply to this email (or WhatsApp ${name}) 
                with your Google Calendar appointment link and a brief note like:<br/><br/>
                <em>"Hi ${name}, thanks for reaching out! I've reviewed your details and I'm 
                excited to chat. Please book a time that works for you: [Google Calendar link]. 
                I'll send a Google Meet link once confirmed."</em>
              </div>

              <div class="footer">
                Sent from the TechSisConsult strategy call form · techsisconsult.com
              </div>
            </section>
          </body>
        </html>
      `,
    });

    // Also send a confirmation email to the client
    await resend.emails.send({
      from: 'TechSisConsult <hello@techsisconsult.com>',
      to: email,
      subject: `We've received your strategy call request, ${name.split(' ')[0]}!`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8f8f6; margin: 0; padding: 24px; }
              .card { background: #ffffff; border-radius: 16px; padding: 32px; max-width: 520px; margin: 0 auto; border: 1px solid #e5e7eb; }
              .header { background: #021823; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 28px; }
              h1 { color: #d4a843; font-size: 22px; margin: 0 0 8px; }
              .sub { color: rgba(255,255,255,0.6); font-size: 13px; margin: 0; }
              h2 { color: #021823; font-size: 18px; }
              p { color: #6b7280; font-size: 14px; line-height: 1.7; }
              .step { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 14px; }
              .dot { width: 24px; height: 24px; border-radius: 50%; background: #d4a843; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 800; color: #021823; flex-shrink: 0; margin-top: 2px; }
              .step-text { font-size: 13px; color: #374151; line-height: 1.6; }
              .footer { font-size: 11px; color: #9ca3af; text-align: center; margin-top: 24px; }
              .cta { display: inline-block; background: #d4a843; color: #021823; font-weight: 800; font-size: 14px; padding: 12px 28px; border-radius: 999px; text-decoration: none; margin: 16px 0; }
            </style>
          </head>
          <body>
            <section class="card">
              <div class="header">
                <h1>TechSisConsult</h1>
                <p class="sub">Smart Tech for Modern Businesses</p>
              </div>

              <h2>Hi ${name.split(' ')[0]}, we've got your request! 🎉</h2>
              <p>
                Thank you for reaching out. We've received your strategy call request
                and we're reviewing your details right now. 
                <strong style="color: #021823;">Within the next few hours</strong>, 
                we'll send you a confirmed time slot and a Google Meet link.
              </p>

              <p><strong style="color: #021823;">What happens next:</strong></p>

              <div class="step">
                <div class="dot">1</div>
                <div class="step-text">We review your project details and prepare for the conversation.</div>
              </div>
              <div class="step">
                <div class="dot">2</div>
                <div class="step-text">We reply with a Google Calendar link — you pick a time that suits you.</div>
              </div>
              <div class="step">
                <div class="dot">3</div>
                <div class="step-text">We show up on time, prepared, and ready to add real value to your business.</div>
              </div>

              <p style="margin-top: 20px;">
                In the meantime, feel free to WhatsApp us directly if you have any
                urgent questions:
                <br />
                <a href="https://wa.me/2347026766769" style="color: #25D366; font-weight: 700;">
                  Chat on WhatsApp →
                </a>
              </p>

              <div class="footer">
                TechSisConsult · hello@techsisconsult.com · Lagos, Nigeria<br />
                You're receiving this because you submitted a strategy call request on our website.
              </div>
            </section>
          </body>
        </html>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Strategy call email error:', error);
    return Response.json({ ok: false }, { status: 500 });
  }
}
