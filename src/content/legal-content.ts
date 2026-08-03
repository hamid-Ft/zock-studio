import type { Locale } from "@/lib/i18n";

type LegalSection = { title: string; paragraphs: readonly string[] };

export const legalCopy: Record<
	Locale,
	{
		privacy: {
			title: string;
			intro: string;
			updated: string;
			sections: LegalSection[];
		};
		terms: {
			title: string;
			intro: string;
			updated: string;
			sections: LegalSection[];
		};
	}
> = {
	en: {
		privacy: {
			title: "Privacy notice",
			intro:
				"This notice explains how the founder-operated Moonlancer website handles project inquiries and basic site measurement.",
			updated: "Last updated: 3 August 2026",
			sections: [
				{
					title: "Operator and contact",
					paragraphs: [
						"Hamid Fattahi operates this website and is the commercial contact for Moonlancer inquiries. Questions, correction requests, or deletion requests can be sent to hello@moonlancer.ir.",
					],
				},
				{
					title: "Information collected",
					paragraphs: [
						"The project intake can collect your name, work email, company, role, public company profile, industry, system context, problem, desired outcome, urgency, stage, technical context, deadline, budget band, contact preference, consent, and campaign attribution.",
						"An unfinished form draft is stored only in your browser. It is removed after a successful submission and is not available to Moonlancer before you submit.",
					],
				},
				{
					title: "Purpose and processors",
					paragraphs: [
						"Inquiry data is used to assess fit, respond to you, prepare a proposal when appropriate, prevent abuse, and maintain commercial correspondence. Cloudflare Turnstile helps prevent automated submissions. A configured downstream workflow stores the inquiry and sends notification and confirmation emails.",
						"Moonlancer uses a separately hosted Umami instance for privacy-focused page and conversion measurement. Analytics events do not include names, emails, companies, or project descriptions.",
					],
				},
				{
					title: "Retention",
					paragraphs: [
						"Inactive or unqualified inquiries are deleted after 90 days. Qualified commercial correspondence may be retained for up to 24 months. Contract, invoicing, accounting, dispute, or legal records may be kept longer where an agreement or applicable obligation requires it.",
					],
				},
				{
					title: "Sharing and your choices",
					paragraphs: [
						"Moonlancer does not sell inquiry data. Information is shared only with service providers needed to operate the site and respond, or when required by law. You may ask for access, correction, or deletion by emailing hello@moonlancer.ir.",
					],
				},
			],
		},
		terms: {
			title: "Website terms",
			intro:
				"These interim terms govern use of the Moonlancer website. Any paid engagement requires a separate written agreement.",
			updated: "Last updated: 3 August 2026",
			sections: [
				{
					title: "Website purpose",
					paragraphs: [
						"The website describes Moonlancer’s operating focus, engagement shapes, professional network, and evidence publication standards. Content is general information and is not legal, financial, security, or operational advice for a specific system.",
					],
				},
				{
					title: "No automatic engagement",
					paragraphs: [
						"Submitting an inquiry, receiving a response, or joining a call does not create a client relationship, reserve capacity, promise a meeting, or authorize work. Scope, access, fees, payment, intellectual property, confidentiality, support, and acceptance must be agreed in writing before work starts.",
					],
				},
				{
					title: "Evidence and intellectual property",
					paragraphs: [
						"Moonlancer publishes client names, quotations, interfaces, diagrams, metrics, or implementation evidence only with appropriate permission. Website copy, branding, and original presentation remain protected; third-party names and marks belong to their respective owners.",
					],
				},
				{
					title: "Acceptable use",
					paragraphs: [
						"Do not misuse the intake, attempt to bypass security controls, submit unlawful or confidential material you are not authorized to share, or interfere with the website or its service providers.",
					],
				},
				{
					title: "Availability and changes",
					paragraphs: [
						"The website may change or be temporarily unavailable. Moonlancer does not guarantee that every inquiry is suitable, that every listed specialist is available for a particular date, or that general site information fits a specific operating environment.",
					],
				},
			],
		},
	},
	fa: {
		privacy: {
			title: "اطلاعیه حریم خصوصی",
			intro:
				"این اطلاعیه توضیح می‌دهد وب‌سایت بنیان‌گذارمحور Moonlancer چگونه درخواست‌های پروژه و اندازه‌گیری پایه سایت را پردازش می‌کند.",
			updated: "آخرین به‌روزرسانی: ۱۲ مرداد ۱۴۰۵",
			sections: [
				{
					title: "مسئول و راه تماس",
					paragraphs: [
						"حمید فتاحی این وب‌سایت را اداره می‌کند و راه تماس تجاری درخواست‌های Moonlancer است. پرسش، اصلاح یا درخواست حذف اطلاعات را به hello@moonlancer.ir ارسال کنید.",
					],
				},
				{
					title: "اطلاعات جمع‌آوری‌شده",
					paragraphs: [
						"فرم پروژه می‌تواند نام، ایمیل کاری، شرکت، سمت، پروفایل عمومی شرکت، صنعت، زمینه سیستم، مسئله، نتیجه مطلوب، فوریت، مرحله، زمینه فنی، مهلت، بازه بودجه، روش تماس، رضایت و اطلاعات کمپین را دریافت کند.",
						"پیش‌نویس ناتمام فقط در مرورگر شما ذخیره می‌شود، پس از ارسال موفق پاک می‌شود و Moonlancer پیش از ارسال به آن دسترسی ندارد.",
					],
				},
				{
					title: "هدف و پردازش‌کنندگان",
					paragraphs: [
						"اطلاعات برای بررسی تناسب، پاسخ، تهیه پیشنهاد در صورت نیاز، جلوگیری از سوءاستفاده و نگه‌داری مکاتبات تجاری استفاده می‌شود. Cloudflare Turnstile از ارسال خودکار جلوگیری می‌کند و جریان پایین‌دستی تنظیم‌شده، درخواست و ایمیل‌های اعلان و تأیید را مدیریت می‌کند.",
						"Moonlancer برای سنجش صفحه و تبدیل از نمونه جداگانه Umami استفاده می‌کند. رویدادهای تحلیلی شامل نام، ایمیل، شرکت یا شرح پروژه نیستند.",
					],
				},
				{
					title: "مدت نگه‌داری",
					paragraphs: [
						"درخواست‌های غیرفعال یا فاقد شرایط پس از ۹۰ روز حذف می‌شوند. مکاتبات تجاری واجد شرایط تا ۲۴ ماه نگه‌داری می‌شوند. اسناد قرارداد، صورتحساب، حسابداری، اختلاف یا الزام قانونی ممکن است در صورت نیاز بیشتر نگه‌داری شوند.",
					],
				},
				{
					title: "اشتراک‌گذاری و انتخاب شما",
					paragraphs: [
						"Moonlancer اطلاعات درخواست را نمی‌فروشد. اطلاعات فقط با ارائه‌دهندگان لازم برای اداره سایت و پاسخ یا در صورت الزام قانونی به اشتراک گذاشته می‌شود. برای دسترسی، اصلاح یا حذف به hello@moonlancer.ir ایمیل بزنید.",
					],
				},
			],
		},
		terms: {
			title: "شرایط استفاده از وب‌سایت",
			intro:
				"این شرایط موقت استفاده از وب‌سایت Moonlancer را مشخص می‌کند. هر همکاری پولی به توافق مکتوب جداگانه نیاز دارد.",
			updated: "آخرین به‌روزرسانی: ۱۲ مرداد ۱۴۰۵",
			sections: [
				{
					title: "هدف وب‌سایت",
					paragraphs: [
						"وب‌سایت تمرکز عملیاتی، شکل همکاری، شبکه حرفه‌ای و استاندارد انتشار شواهد Moonlancer را توضیح می‌دهد. محتوا عمومی است و مشاوره حقوقی، مالی، امنیتی یا عملیاتی برای یک سیستم مشخص نیست.",
					],
				},
				{
					title: "عدم ایجاد خودکار همکاری",
					paragraphs: [
						"ارسال درخواست، دریافت پاسخ یا حضور در تماس، رابطه مشتری ایجاد نمی‌کند، ظرفیت رزرو نمی‌کند و اجازه شروع کار نیست. محدوده، دسترسی، هزینه، پرداخت، مالکیت فکری، محرمانگی، پشتیبانی و پذیرش باید پیش از شروع مکتوب شوند.",
					],
				},
				{
					title: "شواهد و مالکیت فکری",
					paragraphs: [
						"Moonlancer نام مشتری، نقل‌قول، رابط، نمودار، معیار یا شواهد پیاده‌سازی را فقط با اجازه مناسب منتشر می‌کند. متن، برند و ارائه اصیل وب‌سایت محفوظ است و نام و نشان اشخاص ثالث متعلق به صاحبان آن‌هاست.",
					],
				},
				{
					title: "استفاده قابل قبول",
					paragraphs: [
						"از فرم سوءاستفاده نکنید، کنترل‌های امنیتی را دور نزنید، اطلاعات غیرقانونی یا محرمانه‌ای که اجازه اشتراک آن را ندارید نفرستید و در کار وب‌سایت یا ارائه‌دهندگان آن اختلال ایجاد نکنید.",
					],
				},
				{
					title: "دسترس‌پذیری و تغییرات",
					paragraphs: [
						"وب‌سایت ممکن است تغییر کند یا موقتاً در دسترس نباشد. Moonlancer تضمین نمی‌کند هر درخواست مناسب باشد، هر متخصص در تاریخ خاصی ظرفیت داشته باشد یا اطلاعات عمومی سایت برای محیط عملیاتی مشخصی کافی باشد.",
					],
				},
			],
		},
	},
};
