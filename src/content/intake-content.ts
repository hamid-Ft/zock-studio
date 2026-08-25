import type { Locale } from "@/lib/i18n";

export const intakeCopy = {
	en: {
		page: {
			kicker: "Project intake",
			title: "Describe the system problem, not a shopping list of features.",
			intro:
				"This structured intake helps Moonlancer decide whether the right first step is a diagnostic, stabilization sprint, delivery engagement, retainer, or no engagement.",
			response: "Hamid reviews qualified inquiries within one business day.",
		},
		steps: ["Company", "Problem", "Timing", "Contact"],
		stepOf: (current: number, total: number) => `Step ${current} of ${total}`,
		sections: {
			company: "Company context",
			companyDescription:
				"Tell us who owns the problem and the operating environment around it.",
			problem: "Operational problem",
			problemDescription:
				"Focus on what is failing, who is affected, and what better operation would look like.",
			timing: "Urgency and commercial fit",
			timingDescription:
				"These answers help us propose a responsible first engagement without promising a meeting prematurely.",
			contact: "Response route",
			contactDescription:
				"Review the context, choose how we should respond, and consent to this inquiry being processed.",
		},
		fields: {
			company: "Company",
			role: "Your role",
			website: "Company website or public profile",
			industry: "Industry",
			system: "System or workflow involved",
			problem: "What is failing today?",
			outcome: "What outcome do you need?",
			stage: "Current stage",
			urgency: "Business urgency",
			stack: "Current stack or connected systems",
			deadline: "Important date or deadline",
			budget: "Provisional budget range",
			preferredContact: "Preferred response method",
			name: "Full name",
			email: "Work email",
		},
		placeholders: {
			company: "Company name",
			role: "e.g. CTO, ERP manager, operations director",
			website: "https://company.example",
			problem:
				"Describe the failing workflow, data mismatch, operational cost, and who is affected.",
			outcome:
				"Describe the observable result that would make this engagement successful.",
			stack: "ERP, POS, payment provider, databases, devices, or unknown",
			deadline: "YYYY-MM-DD or a relevant business date",
			name: "Your full name",
			email: "name@company.com",
		},
		options: {
			industries: [
				"Multi-store retail",
				"FMCG distribution",
				"Ecommerce and fulfillment",
				"ERP-heavy operations",
				"Payments or fintech",
				"Operating software product",
				"Agency or implementation partner",
				"Other operational business",
			],
			systems: [
				"Retail, store, or POS operations",
				"ERP, warehouse, or inventory",
				"Payments, invoices, or reconciliation",
				"Ecommerce or fulfillment",
				"Field operations or mobile devices",
				"Reporting, data, or integration",
			],
			stages: [
				"Investigation",
				"Live incident",
				"Stabilization",
				"New delivery",
				"Ongoing support",
			],
			urgencies: [
				"Immediate operational risk",
				"Important within 30 days",
				"Planned within 90 days",
				"Exploring a future engagement",
			],
			budgets: [
				"Under $5,000",
				"$5,000–$15,000",
				"$15,000–$40,000",
				"$40,000+",
			],
			contacts: ["Work email", "LinkedIn", "Phone or messaging app"],
		},
		required: "Required",
		optional: "Optional",
		select: "Select an option",
		back: "Back",
		next: "Continue",
		review: "Review and send",
		submit: "Send system problem",
		pending: "Sending securely…",
		consent:
			"I agree that Moonlancer may process these details to assess and respond to this inquiry.",
		privacyPrefix: "Read how inquiry data is handled in the",
		privacyLink: "Privacy notice",
		draftNote:
			"Your draft is saved only in this browser until submission succeeds.",
		fallback: "If the form is unavailable, email hello@moonlancer.ir.",
		successTitle: "Your system problem has been received.",
		successBody:
			"Hamid will review the context and respond within one business day. A submission does not automatically promise a meeting or engagement.",
		error:
			"The inquiry could not be delivered. Your draft is preserved; retry or use hello@moonlancer.ir.",
		verificationError:
			"The anti-spam verification expired or failed. Refresh it and submit again.",
		validationSummary: "Review the highlighted fields before continuing.",
	},
	fa: {
		page: {
			kicker: "فرم بررسی پروژه",
			title: "مسئله سیستم را توضیح دهید، نه فقط فهرست قابلیت‌ها را.",
			intro:
				"این فرم ساختاریافته کمک می‌کند مشخص کنیم گام درست ارزیابی، اسپرینت پایدارسازی، تحویل محصول، پشتیبانی یا عدم همکاری است.",
			response:
				"حمید درخواست‌های واجد شرایط را حداکثر طی یک روز کاری بررسی می‌کند.",
		},
		steps: ["شرکت", "مسئله", "زمان", "تماس"],
		stepOf: (current: number, total: number) => `مرحله ${current} از ${total}`,
		sections: {
			company: "زمینه شرکت",
			companyDescription:
				"بگویید چه کسی مالک مسئله است و سیستم در چه محیط عملیاتی کار می‌کند.",
			problem: "مسئله عملیاتی",
			problemDescription:
				"روی چیزی که خراب است، افراد درگیر و شکل عملیات بهتر تمرکز کنید.",
			timing: "فوریت و تناسب تجاری",
			timingDescription:
				"این پاسخ‌ها کمک می‌کند بدون وعده زودهنگام جلسه، گام اول مسئولانه‌ای پیشنهاد کنیم.",
			contact: "مسیر پاسخ",
			contactDescription:
				"اطلاعات را مرور کنید، روش پاسخ را انتخاب کنید و با پردازش این درخواست موافقت کنید.",
		},
		fields: {
			company: "شرکت",
			role: "سمت شما",
			website: "وب‌سایت یا پروفایل عمومی شرکت",
			industry: "صنعت",
			system: "سیستم یا فرآیند درگیر",
			problem: "امروز چه چیزی درست کار نمی‌کند؟",
			outcome: "چه نتیجه‌ای نیاز دارید؟",
			stage: "وضعیت فعلی",
			urgency: "فوریت کسب‌وکار",
			stack: "فناوری یا سیستم‌های متصل فعلی",
			deadline: "تاریخ مهم یا مهلت",
			budget: "بازه تقریبی بودجه",
			preferredContact: "روش ترجیحی پاسخ",
			name: "نام و نام خانوادگی",
			email: "ایمیل کاری",
		},
		placeholders: {
			company: "نام شرکت",
			role: "مثلاً مدیر فناوری، مدیر ERP یا مدیر عملیات",
			website: "https://company.example",
			problem:
				"فرآیند خراب، اختلاف داده، هزینه عملیاتی و افراد درگیر را توضیح دهید.",
			outcome:
				"نتیجه قابل مشاهده‌ای را توضیح دهید که نشان می‌دهد همکاری موفق بوده است.",
			stack: "ERP، POS، درگاه پرداخت، پایگاه داده، دستگاه یا نامشخص",
			deadline: "تاریخ یا رویداد مهم کسب‌وکار",
			name: "نام کامل شما",
			email: "name@company.com",
		},
		options: {
			industries: [
				"خرده‌فروشی چندشعبه‌ای",
				"پخش و توزیع FMCG",
				"فروش آنلاین و ارسال",
				"عملیات مبتنی بر ERP",
				"پرداخت یا فین‌تک",
				"محصول نرم‌افزاری فعال",
				"آژانس یا شریک پیاده‌سازی",
				"سایر کسب‌وکارهای عملیاتی",
			],
			systems: [
				"عملیات فروشگاه یا POS",
				"ERP، انبار یا موجودی",
				"پرداخت، فاکتور یا مغایرت‌گیری",
				"فروش آنلاین یا ارسال",
				"عملیات میدانی یا دستگاه موبایل",
				"گزارش، داده یا اتصال سیستم‌ها",
			],
			stages: [
				"در حال بررسی",
				"رخداد فعال",
				"نیازمند پایدارسازی",
				"تحویل قابلیت جدید",
				"پشتیبانی مستمر",
			],
			urgencies: [
				"ریسک عملیاتی فوری",
				"مهم در ۳۰ روز آینده",
				"برنامه‌ریزی‌شده در ۹۰ روز آینده",
				"بررسی برای همکاری آینده",
			],
			budgets: [
				"کمتر از ۱۰۰ میلیون تومان",
				"۱۰۰ تا ۳۰۰ میلیون تومان",
				"۳۰۰ تا ۸۰۰ میلیون تومان",
				"بیش از ۸۰۰ میلیون تومان",
			],
			contacts: ["ایمیل کاری", "LinkedIn", "تلفن یا پیام‌رسان"],
		},
		required: "الزامی",
		optional: "اختیاری",
		select: "یک گزینه انتخاب کنید",
		back: "بازگشت",
		next: "ادامه",
		review: "مرور و ارسال",
		submit: "ارسال مسئله سیستم",
		pending: "در حال ارسال امن…",
		consent:
			"موافقم Moonlancer این اطلاعات را فقط برای ارزیابی و پاسخ به همین درخواست پردازش کند.",
		privacyPrefix: "جزئیات پردازش اطلاعات را در",
		privacyLink: "اطلاعیه حریم خصوصی",
		draftNote: "تا پیش از ارسال موفق، پیش‌نویس فقط در همین مرورگر ذخیره می‌شود.",
		fallback: "اگر فرم در دسترس نیست، به hello@moonlancer.ir ایمیل بزنید.",
		successTitle: "مسئله سیستم شما دریافت شد.",
		successBody:
			"حمید اطلاعات را بررسی می‌کند و حداکثر طی یک روز کاری پاسخ می‌دهد. ارسال فرم به معنی وعده جلسه یا شروع همکاری نیست.",
		error:
			"درخواست ارسال نشد. پیش‌نویس محفوظ است؛ دوباره تلاش کنید یا به hello@moonlancer.ir ایمیل بزنید.",
		verificationError:
			"اعتبارسنجی ضداسپم منقضی شد یا موفق نبود. آن را تازه کنید و دوباره ارسال کنید.",
		validationSummary: "پیش از ادامه، فیلدهای مشخص‌شده را بررسی کنید.",
	},
} as const satisfies Record<Locale, object>;

export function getIntakeCopy(locale: Locale) {
	return intakeCopy[locale];
}
