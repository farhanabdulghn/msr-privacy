import type { ReactNode } from 'react'

const APP_NAME = 'MSR App'
const DEVELOPER = 'Majelis Satu Rasa'
const CONTACT_EMAIL = 'saturasamajelis@gmail.com'
const LAST_UPDATED = '21 November 2026'

function Section({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="mt-8">
            <h2 className="mb-3 text-xl font-semibold text-green-800">{title}</h2>
            <div className="space-y-3 leading-relaxed text-gray-700">{children}</div>
        </section>
    )
}

function List({ items }: { items: ReactNode[] }) {
    return (
        <ul className="list-disc space-y-2 pl-6">
            {items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    )
}

export default function PrivacyPage() {
    return (
        <main className="mx-auto max-w-3xl px-5 py-10">
            <header className="border-b pb-6">
                <h1 className="text-3xl font-bold text-green-900">Kebijakan Privasi</h1>
                <p className="mt-2 text-gray-600">
                    {APP_NAME} oleh {DEVELOPER} · Terakhir diperbarui: {LAST_UPDATED}
                </p>
            </header>

            <Section title="1. Pendahuluan">
                <p>
                    {APP_NAME} adalah aplikasi ibadah yang menyediakan Al-Qur&apos;an
                    (per ayat, per juz, dan per halaman, dengan warna tajwid dan
                    terjemahan Bahasa Indonesia), dzikir dan tasbih, jadwal sholat, arah
                    kiblat, serta alarm adzan. Kebijakan ini menjelaskan data apa yang
                    diproses aplikasi dan bagaimana data tersebut digunakan.
                </p>
                <p>
                    Singkatnya: <strong>kami tidak meminta Anda membuat akun, tidak
                        menampilkan iklan, dan tidak mengumpulkan data pribadi Anda ke server
                        kami.</strong> Sebagian besar data disimpan hanya di perangkat Anda.
                </p>
            </Section>

            <Section title="2. Data yang Disimpan di Perangkat Anda">
                <p>
                    Data berikut disimpan secara lokal di perangkat dan tidak dikirim ke
                    server kami:
                </p>
                <List
                    items={[
                        'Terakhir dibaca: surah, ayat, juz, dan halaman Al-Qur\'an terakhir yang Anda buka.',
                        'Ayat favorit: ayat yang Anda simpan.',
                        'Pengaturan bacaan: warna tajwid, ukuran font Arab dan latin, tampilan terjemahan, dan mode baca.',
                        'Pengaturan aplikasi: mode malam dan status alarm adzan.',
                    ]}
                />
                <p>
                    Data ini terhapus ketika Anda menghapus aplikasi atau menghapus data
                    aplikasi melalui pengaturan perangkat.
                </p>
            </Section>

            <Section title="3. Lokasi">
                <p>
                    Aplikasi dapat meminta izin lokasi ketika Anda memilih{' '}
                    <em>Gunakan Lokasi Saat Ini</em> atau membuka fitur arah kiblat.
                    Lokasi digunakan untuk:
                </p>
                <List
                    items={[
                        'menentukan kota terdekat dari daftar kota yang tersedia, untuk menghitung jadwal sholat;',
                        'menghitung dan menampilkan arah kiblat.',
                    ]}
                />
                <p>
                    Perhitungan jadwal sholat dan arah kiblat dilakukan di perangkat.
                    Koordinat Anda tidak kami kirim atau simpan di server. Jika izin
                    lokasi ditolak, aplikasi memakai kota yang Anda pilih secara manual
                    (atau Bandung sebagai bawaan). Anda dapat mencabut izin kapan saja
                    melalui pengaturan perangkat.
                </p>
            </Section>

            <Section title="4. Notifikasi dan Alarm Adzan">
                <p>
                    Untuk alarm adzan, aplikasi meminta izin notifikasi dan, pada
                    Android, izin alarm tepat waktu. Notifikasi adzan dijadwalkan secara
                    lokal di perangkat untuk beberapa hari ke depan dan diperbarui saat
                    aplikasi dibuka atau lokasi berubah. Anda dapat menonaktifkannya
                    kapan saja di menu Pengaturan.
                </p>
            </Section>

            <Section title="5. Layanan Pihak Ketiga">
                <p>Aplikasi menggunakan layanan berikut yang dapat memproses data teknis:</p>
                <List
                    items={[
                        <>
                            <strong>Firebase Remote Config (Google):</strong> dipakai untuk
                            mengambil konfigurasi tautan sosial media resmi. Layanan ini dapat
                            memproses data teknis seperti alamat IP, pengenal instalasi
                            Firebase, dan informasi dasar perangkat/aplikasi. Kami tidak
                            menggunakan Firebase Analytics atau Crashlytics.
                        </>,
                        <>
                            <strong>Google Fonts:</strong> font tampilan dapat diunduh dari
                            server Google saat aplikasi digunakan, sehingga alamat IP Anda
                            dapat terlihat oleh Google.
                        </>,
                        <>
                            <strong>Google Play Store dan aplikasi lain:</strong> saat Anda
                            memilih Beri Rating, mengikuti sosial media, atau membagikan
                            aplikasi, aplikasi membuka Play Store, browser, atau aplikasi
                            pilihan Anda. Penggunaan data di sana tunduk pada kebijakan
                            masing-masing pihak.
                        </>,
                    ]}
                />
                <p>
                    Fitur <em>Beri Masukan</em> memakai menu bagikan bawaan perangkat.
                    Isi masukan Anda tidak dikirim langsung ke kami; masukan baru sampai
                    ke kami jika Anda sendiri mengirimkannya melalui aplikasi yang Anda
                    pilih.
                </p>
            </Section>

            <Section title="6. Yang Tidak Kami Lakukan">
                <List
                    items={[
                        'Tidak ada pendaftaran atau akun pengguna di aplikasi.',
                        'Tidak ada iklan dan tidak ada pelacakan perilaku untuk keperluan iklan.',
                        'Tidak menjual atau membagikan data pribadi Anda kepada pihak lain.',
                        'Tidak mengakses kontak, kamera, mikrofon, atau galeri Anda.',
                    ]}
                />
            </Section>

            <Section title="7. Keamanan">
                <p>
                    Data aplikasi disimpan di penyimpanan internal aplikasi pada
                    perangkat Anda. Komunikasi dengan layanan pihak ketiga dilakukan
                    melalui koneksi yang disediakan layanan tersebut. Tidak ada metode
                    penyimpanan atau transmisi yang sepenuhnya bebas risiko, sehingga
                    kami tidak dapat menjamin keamanan mutlak.
                </p>
            </Section>

            <Section title="8. Hak dan Pilihan Anda">
                <List
                    items={[
                        'Mencabut izin lokasi dan notifikasi kapan saja melalui pengaturan perangkat.',
                        'Menghapus ayat favorit dan riwayat bacaan dengan menghapus data aplikasi atau mencopot pemasangan aplikasi.',
                        'Menonaktifkan alarm adzan di menu Pengaturan.',
                    ]}
                />
            </Section>

            <Section title="9. Privasi Anak">
                <p>
                    Aplikasi ini ditujukan untuk umum dan tidak secara sengaja
                    mengumpulkan data pribadi dari anak-anak.
                </p>
            </Section>

            <Section title="10. Fitur yang Akan Datang">
                <p>
                    Beberapa fitur direncanakan hadir di kemudian hari (misalnya artikel,
                    audio murottal, jadwal kajian, dan fitur lainnya). Bila fitur
                    tersebut mengubah cara data diproses, kebijakan ini akan
                    diperbarui sebelum fitur dirilis.
                </p>
            </Section>

            <Section title="11. Perubahan Kebijakan">
                <p>
                    Kebijakan ini dapat diperbarui sewaktu-waktu. Tanggal pembaruan
                    terakhir selalu tercantum di bagian atas halaman ini.
                </p>
            </Section>

            <Section title="12. Hubungi Kami">
                <p>
                    Pertanyaan tentang kebijakan ini dapat dikirim ke{' '}
                    <a
                        className="text-green-700 underline"
                        href={`mailto:${CONTACT_EMAIL}`}
                    >
                        {CONTACT_EMAIL}
                    </a>
                    .
                </p>
            </Section>

            <footer className="mt-12 border-t pt-6 text-sm text-gray-500">
                © {new Date().getFullYear()} {DEVELOPER}
            </footer>
        </main>
    )
}