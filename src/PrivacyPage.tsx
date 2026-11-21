import { useEffect, useState, type ReactNode } from 'react'

const APP_NAME = 'MSR App'
const DEVELOPER = 'Majelis Satu Rasa'
const CONTACT_EMAIL = 'saturasamajelis@gmail.com'

type Language = 'en' | 'id'

type PolicySection = {
    title: string
    content: ReactNode[]
}

function List({ items }: { items: ReactNode[] }) {
    return (
        <ul className="list-disc space-y-2.5 pl-5 marker:text-emerald-600 sm:pl-6">
            {items.map((item, index) => (
                <li key={index} className="pl-1">
                    {item}
                </li>
            ))}
        </ul>
    )
}

const translations: Record<Language, {
    title: string
    updated: string
    eyebrow: string
    description: string
    sections: PolicySection[]
    footerNote: string
}> = {
    en: {
        title: 'Privacy Policy',
        updated: 'November 21, 2026',
        eyebrow: 'Your privacy matters',
        description: 'A clear overview of the information MSR App uses and how it is handled.',
        footerNote: 'Made with care by',
        sections: [
            {
                title: 'Introduction',
                content: [
                    <p>
                        {APP_NAME} is a worship app that offers the Qur’an (by verse, juz, and
                        page, with tajwid color-coding and Indonesian translation), dhikr and
                        tasbih, prayer times, a qibla compass, and adhan alarms. This policy
                        explains what information the app processes and how it is used.
                    </p>,
                    <p>
                        <strong>
                            In short: you don’t need an account, there are no ads, and we don’t
                            collect your personal data on our servers.
                        </strong>{' '}
                        Most data stays on your device.
                    </p>,
                ],
            },
            {
                title: 'Data stored on your device',
                content: [
                    <p>The following data is stored locally on your device and is not sent to our servers:</p>,
                    <List
                        items={[
                            'Reading progress: the last surah, verse, juz, and Qur’an page you opened.',
                            'Favorite verses: verses you have saved.',
                            'Reading preferences: tajwid colors, Arabic and Latin font sizes, translation visibility, and reading mode.',
                            'App settings: night mode and adhan alarm status.',
                        ]}
                    />,
                    <p>
                        This data is removed when you uninstall the app or clear its data in
                        your device settings.
                    </p>,
                ],
            },
            {
                title: 'Location',
                content: [
                    <p>
                        The app may ask for location permission when you choose{' '}
                        <em>Use Current Location</em> or open the qibla compass. Location is used to:
                    </p>,
                    <List
                        items={[
                            'find the nearest city in the available city list to calculate prayer times;',
                            'calculate and display the direction of the qibla.',
                        ]}
                    />,
                    <p>
                        Prayer times and the qibla direction are calculated on your device.
                        We do not send or store your coordinates on our servers. If you deny
                        location permission, the app uses the city you select manually (or
                        Bandung by default). You can revoke permission at any time in your
                        device settings.
                    </p>,
                ],
            },
            {
                title: 'Notifications and adhan alarms',
                content: [
                    <p>
                        Adhan alarms require notification permission and, on Android,
                        exact-alarm permission. Adhan notifications are scheduled locally on
                        your device for the next few days and refreshed when you open the app
                        or your location changes. You can turn them off at any time in
                        Settings.
                    </p>,
                ],
            },
            {
                title: 'Third-party services',
                content: [
                    <p>The app uses the following services, which may process technical data:</p>,
                    <List
                        items={[
                            <>
                                <strong>Firebase Remote Config (Google):</strong> used to retrieve
                                links to official social media. It may process technical data
                                such as your IP address, Firebase installation identifier, and
                                basic device and app information. We do not use Firebase
                                Analytics or Crashlytics.
                            </>,
                            <>
                                <strong>Google Fonts:</strong> display fonts may be downloaded
                                from Google’s servers while you use the app, which may make your
                                IP address visible to Google.
                            </>,
                            <>
                                <strong>Google Play Store and other apps:</strong> when you
                                choose to rate the app, visit social media, or share the app,
                                it opens the Play Store, a browser, or an app of your choice.
                                How those services use data is governed by their own policies.
                            </>,
                        ]}
                    />,
                    <p>
                        <em>Send Feedback</em> uses your device’s built-in sharing menu. Your
                        feedback is not sent directly to us; we receive it only if you choose
                        to send it using an app you select.
                    </p>,
                ],
            },
            {
                title: 'What we don’t do',
                content: [
                    <List
                        items={[
                            'We do not require registration or a user account.',
                            'We do not show ads or track behavior for advertising.',
                            'We do not sell or share your personal data with others.',
                            'We do not access your contacts, camera, microphone, or gallery.',
                        ]}
                    />,
                ],
            },
            {
                title: 'Security',
                content: [
                    <p>
                        App data is stored in the app’s internal storage on your device.
                        Communications with third-party services use the connections
                        provided by those services. No storage or transmission method is
                        entirely risk-free, so we cannot guarantee absolute security.
                    </p>,
                ],
            },
            {
                title: 'Your rights and choices',
                content: [
                    <List
                        items={[
                            'Revoke location and notification permissions at any time in your device settings.',
                            'Delete favorite verses and reading history by clearing app data or uninstalling the app.',
                            'Turn off adhan alarms in Settings.',
                        ]}
                    />,
                ],
            },
            {
                title: 'Children’s privacy',
                content: [
                    <p>
                        This app is intended for a general audience and does not knowingly
                        collect personal data from children.
                    </p>,
                ],
            },
            {
                title: 'Future features',
                content: [
                    <p>
                        Some features may be introduced in the future, such as articles,
                        murottal audio, study schedules, and more. If a feature changes how
                        data is processed, this policy will be updated before that feature
                        is released.
                    </p>,
                ],
            },
            {
                title: 'Changes to this policy',
                content: [
                    <p>
                        We may update this policy from time to time. The date of the latest
                        update is always shown at the top of this page.
                    </p>,
                ],
            },
            {
                title: 'Contact us',
                content: [
                    <p>
                        You can email questions about this policy to{' '}
                        <a className="font-medium text-emerald-800 underline decoration-emerald-300 underline-offset-4 transition hover:text-emerald-950" href={`mailto:${CONTACT_EMAIL}`}>
                            {CONTACT_EMAIL}
                        </a>
                        .
                    </p>,
                ],
            },
        ],
    },
    id: {
        title: 'Kebijakan Privasi',
        updated: '21 November 2026',
        eyebrow: 'Privasi Anda penting',
        description: 'Ringkasan yang jelas tentang informasi yang digunakan MSR App dan cara pengelolaannya.',
        footerNote: 'Dibuat dengan sepenuh hati oleh',
        sections: [
            {
                title: 'Pendahuluan',
                content: [
                    <p>
                        {APP_NAME} adalah aplikasi ibadah yang menyediakan Al-Qur’an (per ayat,
                        per juz, dan per halaman, dengan warna tajwid dan terjemahan Bahasa
                        Indonesia), dzikir dan tasbih, jadwal sholat, arah kiblat, serta alarm
                        adzan. Kebijakan ini menjelaskan data apa yang diproses aplikasi dan
                        bagaimana data tersebut digunakan.
                    </p>,
                    <p>
                        <strong>
                            Singkatnya: Anda tidak perlu membuat akun, tidak ada iklan, dan
                            kami tidak mengumpulkan data pribadi Anda di server kami.
                        </strong>{' '}
                        Sebagian besar data hanya tersimpan di perangkat Anda.
                    </p>,
                ],
            },
            {
                title: 'Data yang disimpan di perangkat Anda',
                content: [
                    <p>Data berikut disimpan secara lokal di perangkat dan tidak dikirim ke server kami:</p>,
                    <List
                        items={[
                            'Terakhir dibaca: surah, ayat, juz, dan halaman Al-Qur’an terakhir yang Anda buka.',
                            'Ayat favorit: ayat yang Anda simpan.',
                            'Pengaturan bacaan: warna tajwid, ukuran font Arab dan Latin, tampilan terjemahan, dan mode baca.',
                            'Pengaturan aplikasi: mode malam dan status alarm adzan.',
                        ]}
                    />,
                    <p>
                        Data ini terhapus ketika Anda menghapus aplikasi atau menghapus data
                        aplikasi melalui pengaturan perangkat.
                    </p>,
                ],
            },
            {
                title: 'Lokasi',
                content: [
                    <p>
                        Aplikasi dapat meminta izin lokasi ketika Anda memilih{' '}
                        <em>Gunakan Lokasi Saat Ini</em> atau membuka fitur arah kiblat.
                        Lokasi digunakan untuk:
                    </p>,
                    <List
                        items={[
                            'menentukan kota terdekat dari daftar kota yang tersedia untuk menghitung jadwal sholat;',
                            'menghitung dan menampilkan arah kiblat.',
                        ]}
                    />,
                    <p>
                        Perhitungan jadwal sholat dan arah kiblat dilakukan di perangkat.
                        Koordinat Anda tidak kami kirim atau simpan di server. Jika izin
                        lokasi ditolak, aplikasi memakai kota yang Anda pilih secara manual
                        (atau Bandung sebagai bawaan). Anda dapat mencabut izin kapan saja
                        melalui pengaturan perangkat.
                    </p>,
                ],
            },
            {
                title: 'Notifikasi dan alarm adzan',
                content: [
                    <p>
                        Untuk alarm adzan, aplikasi meminta izin notifikasi dan, pada Android,
                        izin alarm tepat waktu. Notifikasi adzan dijadwalkan secara lokal di
                        perangkat untuk beberapa hari ke depan dan diperbarui saat aplikasi
                        dibuka atau lokasi berubah. Anda dapat menonaktifkannya kapan saja
                        melalui menu Pengaturan.
                    </p>,
                ],
            },
            {
                title: 'Layanan pihak ketiga',
                content: [
                    <p>Aplikasi menggunakan layanan berikut yang dapat memproses data teknis:</p>,
                    <List
                        items={[
                            <>
                                <strong>Firebase Remote Config (Google):</strong> digunakan untuk
                                mengambil konfigurasi tautan media sosial resmi. Layanan ini
                                dapat memproses data teknis seperti alamat IP, pengenal
                                instalasi Firebase, dan informasi dasar perangkat/aplikasi.
                                Kami tidak menggunakan Firebase Analytics atau Crashlytics.
                            </>,
                            <>
                                <strong>Google Fonts:</strong> font tampilan dapat diunduh dari
                                server Google saat aplikasi digunakan, sehingga alamat IP Anda
                                dapat terlihat oleh Google.
                            </>,
                            <>
                                <strong>Google Play Store dan aplikasi lain:</strong> saat Anda
                                memilih Beri Rating, mengunjungi media sosial, atau membagikan
                                aplikasi, aplikasi membuka Play Store, browser, atau aplikasi
                                pilihan Anda. Penggunaan data di sana mengikuti kebijakan
                                masing-masing pihak.
                            </>,
                        ]}
                    />,
                    <p>
                        Fitur <em>Beri Masukan</em> menggunakan menu bagikan bawaan perangkat.
                        Masukan Anda tidak dikirim langsung kepada kami; masukan hanya kami
                        terima jika Anda memilih untuk mengirimkannya melalui aplikasi yang
                        Anda pilih.
                    </p>,
                ],
            },
            {
                title: 'Hal yang tidak kami lakukan',
                content: [
                    <List
                        items={[
                            'Tidak ada pendaftaran atau akun pengguna di aplikasi.',
                            'Tidak ada iklan dan tidak ada pelacakan perilaku untuk keperluan iklan.',
                            'Kami tidak menjual atau membagikan data pribadi Anda kepada pihak lain.',
                            'Kami tidak mengakses kontak, kamera, mikrofon, atau galeri Anda.',
                        ]}
                    />,
                ],
            },
            {
                title: 'Keamanan',
                content: [
                    <p>
                        Data aplikasi disimpan di penyimpanan internal aplikasi pada perangkat
                        Anda. Komunikasi dengan layanan pihak ketiga menggunakan koneksi yang
                        disediakan layanan tersebut. Tidak ada metode penyimpanan atau
                        transmisi yang sepenuhnya bebas risiko, sehingga kami tidak dapat
                        menjamin keamanan mutlak.
                    </p>,
                ],
            },
            {
                title: 'Hak dan pilihan Anda',
                content: [
                    <List
                        items={[
                            'Mencabut izin lokasi dan notifikasi kapan saja melalui pengaturan perangkat.',
                            'Menghapus ayat favorit dan riwayat bacaan dengan menghapus data aplikasi atau mencopot pemasangan aplikasi.',
                            'Menonaktifkan alarm adzan melalui menu Pengaturan.',
                        ]}
                    />,
                ],
            },
            {
                title: 'Privasi anak',
                content: [
                    <p>
                        Aplikasi ini ditujukan untuk umum dan tidak secara sengaja
                        mengumpulkan data pribadi dari anak-anak.
                    </p>,
                ],
            },
            {
                title: 'Fitur yang akan datang',
                content: [
                    <p>
                        Beberapa fitur mungkin hadir di kemudian hari, seperti artikel,
                        audio murottal, jadwal kajian, dan fitur lainnya. Jika suatu fitur
                        mengubah cara data diproses, kebijakan ini akan diperbarui sebelum
                        fitur tersebut dirilis.
                    </p>,
                ],
            },
            {
                title: 'Perubahan kebijakan',
                content: [
                    <p>
                        Kebijakan ini dapat diperbarui sewaktu-waktu. Tanggal pembaruan
                        terakhir selalu tercantum di bagian atas halaman ini.
                    </p>,
                ],
            },
            {
                title: 'Hubungi kami',
                content: [
                    <p>
                        Pertanyaan tentang kebijakan ini dapat dikirim ke{' '}
                        <a className="font-medium text-emerald-800 underline decoration-emerald-300 underline-offset-4 transition hover:text-emerald-950" href={`mailto:${CONTACT_EMAIL}`}>
                            {CONTACT_EMAIL}
                        </a>
                        .
                    </p>,
                ],
            },
        ],
    },
}

export default function PrivacyPage() {
    const [language, setLanguage] = useState<Language>('en')
    const copy = translations[language]

    useEffect(() => {
        document.documentElement.lang = language
        document.title = `${copy.title} — ${APP_NAME}`
    }, [copy.title, language])

    return (
        <div className="min-h-screen bg-[#f5f7f2] text-slate-700">
            <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -right-36 -top-40 h-[28rem] w-[28rem] rounded-full bg-emerald-100/50 blur-3xl" />
                <div className="absolute -left-48 top-[40rem] h-[30rem] w-[30rem] rounded-full bg-lime-100/35 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-5xl px-5 pb-12 pt-6 sm:px-8 sm:pt-9">
                <header className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-950 text-white shadow-lg shadow-emerald-950/10">
                            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                                <path d="M12 3.5 19 6v5.5c0 4.4-2.9 7.5-7 9-4.1-1.5-7-4.6-7-9V6l7-2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                                <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span className="text-sm font-semibold tracking-wide text-emerald-950">{APP_NAME}</span>
                    </div>

                    <div className="inline-flex items-center gap-1 rounded-full border border-emerald-950/10 bg-white/80 p-1 shadow-sm backdrop-blur">
                        {(['en', 'id'] as const).map((option) => (
                            <button
                                key={option}
                                type="button"
                                lang={option}
                                aria-pressed={language === option}
                                aria-label={option === 'en' ? 'Switch language to English' : 'Ganti bahasa ke Indonesia'}
                                onClick={() => setLanguage(option)}
                                className={`rounded-full px-3.5 py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${
                                    language === option
                                        ? 'bg-emerald-950 text-white shadow-sm'
                                        : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-950'
                                }`}
                            >
                                {option === 'en' ? 'EN' : 'ID'}
                            </button>
                        ))}
                    </div>
                </header>

                <main>
                    <section className="px-1 pb-9 pt-14 sm:pb-12 sm:pt-20">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/70 px-3.5 py-2 text-xs font-medium tracking-wide text-emerald-900 shadow-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                            {copy.eyebrow}
                        </div>
                        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">
                            {copy.title}
                        </h1>
                        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                            {copy.description}
                        </p>
                        <div className="mt-7 flex items-center gap-2 text-sm text-slate-500">
                            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-emerald-700" aria-hidden="true">
                                <path d="M6.5 2.5v2m7-2v2M3.5 7h13m-11 10h9a2 2 0 0 0 2-2V5.5a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2V15a2 2 0 0 0 2 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{language === 'en' ? 'Last updated' : 'Terakhir diperbarui'}: {copy.updated}</span>
                        </div>
                    </section>

                    <article className="rounded-3xl border border-emerald-950/[0.07] bg-white/90 px-6 py-7 shadow-[0_24px_80px_-40px_rgba(15,60,43,0.28)] backdrop-blur sm:px-10 sm:py-10 lg:px-14">
                        <div className="divide-y divide-slate-100">
                            {copy.sections.map((section, index) => (
                                <section key={section.title} className="grid gap-3 py-7 first:pt-0 last:pb-0 sm:grid-cols-[3.25rem_1fr] sm:gap-5 sm:py-8">
                                    <span className="pt-0.5 font-mono text-xs font-semibold tracking-wider text-emerald-700/70">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <h2 className="text-lg font-semibold tracking-tight text-emerald-950 sm:text-xl">
                                            {section.title}
                                        </h2>
                                        <div className="mt-3 space-y-4 text-[0.9375rem] leading-7 text-slate-600">
                                            {section.content.map((content, contentIndex) => (
                                                <div key={contentIndex}>{content}</div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            ))}
                        </div>

                    </article>
                </main>

                <footer className="flex flex-col gap-2 px-1 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <span>© {new Date().getFullYear()} {DEVELOPER}</span>
                    <span>{copy.footerNote} {DEVELOPER}</span>
                </footer>
            </div>
        </div>
    )
}
