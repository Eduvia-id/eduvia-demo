"use client";

import ResultHeader from './_sections/result-header';
import CategoryProgress from './_sections/category-progress';
import QuestionReview from './_sections/question-review';

// Types
type TestResult = {
  id: string;
  title: string;
  date: string;
  duration: string;
  totalScore: number;
  categories: TestCategory[];
  questions: TestQuestion[];
};

export type TestCategory = {
  name: string;
  percentage: number;
  score: string;
};

export type TestQuestion = {
  id: number;
  category: 'TWK' | 'TIU' | 'TKP';
  question: string;
  options: { id: string; text: string }[];
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  explanation: string;
};

const resultData: TestResult = {
  id: "1",
  title: "Tryout #1 - SKD Full Part 1",
  date: "6 Juli 2025",
  duration: "92 Menit",
  totalScore: 378,
  categories: [
    {
      name: "Tes Wawasan Kebangsaan",
      percentage: 60,
      score: "40/65"
    },
    {
      name: "Tes Integrasi Umum",
      percentage: 75,
      score: "60/80"
    },
    {
      name: "Tes Karakteristik Pribadi",
      percentage: 96,
      score: "158/166"
    }
  ],
  questions: [
    // TWK Questions
    {
      id: 1,
      category: "TWK",
      question: "Nilai-nilai yang terkandung dalam sila pertama Pancasila \"Ketuhanan Yang Maha Esa\" antara lain:",
      options: [
        { id: 'A', text: 'Menjunjung tinggi demokrasi dan musyawarah' },
        { id: 'B', text: 'Menghargai kebebasan beragama dan beribadah' },
        { id: 'C', text: 'Mengutamakan kepentingan bangsa di atas golongan' },
        { id: 'D', text: 'Menjunjung tinggi hak asasi manusia dan hukum internasional' },
        { id: 'E', text: 'Mengembangkan ilmu pengetahuan dan teknologi' }
      ],
      userAnswer: "A",
      correctAnswer: "B",
      isCorrect: false,
      explanation: "Sila pertama Pancasila menekankan pentingnya keyakinan terhadap Tuhan serta pengakuan dan penghormatan terhadap keragaman agama di Indonesia. Nilai utamanya mencakup kebebasan beragama dan beribadah sesuai kepercayaan masing-masing, toleransi antar umat beragama, dan anti pemaksaan agama."
    },
    {
      id: 2,
      category: "TWK",
      question: "Bentuk negara Indonesia berdasarkan UUD 1945 adalah:",
      options: [
        { id: 'A', text: 'Negara federal' },
        { id: 'B', text: 'Negara kesatuan' },
        { id: 'C', text: 'Negara konfederasi' },
        { id: 'D', text: 'Negara serikat' },
        { id: 'E', text: 'Negara bagian' }
      ],
      userAnswer: "B",
      correctAnswer: "B",
      isCorrect: true,
      explanation: "Berdasarkan Pasal 1 ayat (1) UUD 1945, Indonesia adalah negara kesatuan yang berbentuk republik. Negara kesatuan berarti kekuasaan pemerintahan pusat tidak dibagi kepada daerah, meskipun dalam pelaksanaannya terdapat otonomi daerah."
    },
    {
      id: 3,
      category: "TWK",
      question: "Fungsi utama MPR menurut UUD 1945 setelah amandemen adalah:",
      options: [
        { id: 'A', text: 'Memilih Presiden dan Wakil Presiden' },
        { id: 'B', text: 'Mengubah dan menetapkan UUD' },
        { id: 'C', text: 'Memberhentikan Presiden' },
        { id: 'D', text: 'Menetapkan GBHN' },
        { id: 'E', text: 'Mengangkat menteri-menteri' }
      ],
      userAnswer: "",
      correctAnswer: "B",
      isCorrect: false,
      explanation: "Setelah amandemen UUD 1945, fungsi utama MPR adalah mengubah dan menetapkan UUD, melantik Presiden dan Wakil Presiden, serta dapat memberhentikan Presiden dan/atau Wakil Presiden dalam masa jabatannya menurut UUD."
    },
    {
      id: 4,
      category: "TWK",
      question: "Yang bukan merupakan makna Bhinneka Tunggal Ika adalah:",
      options: [
        { id: 'A', text: 'Berbeda-beda tetapi tetap satu' },
        { id: 'B', text: 'Persatuan dalam keberagaman' },
        { id: 'C', text: 'Keberagaman adalah kekuatan' },
        { id: 'D', text: 'Perbedaan harus dihilangkan' },
        { id: 'E', text: 'Unity in diversity' }
      ],
      userAnswer: "D",
      correctAnswer: "D",
      isCorrect: true,
      explanation: "Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu. Makna ini menekankan bahwa keberagaman suku, agama, ras, dan budaya di Indonesia justru menjadi kekuatan untuk persatuan, bukan untuk dihilangkan."
    },

    // TIU Questions
    {
      id: 5,
      category: "TIU",
      question: "Jika 2x + 3y = 12 dan x - y = 1, maka nilai x + y adalah:",
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '4' },
        { id: 'C', text: '5' },
        { id: 'D', text: '6' },
        { id: 'E', text: '7' }
      ],
      userAnswer: "C",
      correctAnswer: "C",
      isCorrect: true,
      explanation: "Dari persamaan x - y = 1, didapat x = y + 1. Substitusi ke persamaan pertama: 2(y + 1) + 3y = 12, sehingga 2y + 2 + 3y = 12, 5y = 10, y = 2. Maka x = 3, dan x + y = 5."
    },
    {
      id: 6,
      category: "TIU",
      question: "Dalam sebuah barisan aritmatika, suku ke-3 adalah 8 dan suku ke-7 adalah 20. Suku ke-10 adalah:",
      options: [
        { id: 'A', text: '26' },
        { id: 'B', text: '29' },
        { id: 'C', text: '32' },
        { id: 'D', text: '35' },
        { id: 'E', text: '38' }
      ],
      userAnswer: "B",
      correctAnswer: "B",
      isCorrect: true,
      explanation: "Beda (b) = (U7 - U3)/(7-3) = (20-8)/4 = 3. Suku pertama a = U3 - 2b = 8 - 6 = 2. Maka U10 = a + 9b = 2 + 27 = 29."
    },
    {
      id: 7,
      category: "TIU",
      question: "Silogisme: Semua guru adalah pendidik. Budi adalah guru. Kesimpulannya adalah:",
      options: [
        { id: 'A', text: 'Budi adalah pendidik' },
        { id: 'B', text: 'Semua pendidik adalah guru' },
        { id: 'C', text: 'Budi bukan pendidik' },
        { id: 'D', text: 'Tidak dapat disimpulkan' },
        { id: 'E', text: 'Budi mungkin pendidik' }
      ],
      userAnswer: "A",
      correctAnswer: "A",
      isCorrect: true,
      explanation: "Berdasarkan silogisme kategori: Premis mayor: Semua guru adalah pendidik. Premis minor: Budi adalah guru. Kesimpulan: Budi adalah pendidik. Ini merupakan silogisme yang valid."
    },
    {
      id: 8,
      category: "TIU",
      question: "Jika huruf-huruf dalam kata 'NUSANTARA' disusun secara alfabetis, huruf ke-5 adalah:",
      options: [
        { id: 'A', text: 'N' },
        { id: 'B', text: 'R' },
        { id: 'C', text: 'S' },
        { id: 'D', text: 'T' },
        { id: 'E', text: 'U' }
      ],
      userAnswer: "",
      correctAnswer: "C",
      isCorrect: false,
      explanation: "Huruf-huruf dalam NUSANTARA jika disusun alfabetis: A, A, A, N, N, R, S, T, U. Huruf ke-5 adalah N, tetapi karena ada pengulangan, urutan yang benar adalah A(1), A(2), A(3), N(4), N(5), R(6), S(7), T(8), U(9). Jadi huruf ke-5 adalah N."
    },

    // TKP Questions
    {
      id: 9,
      category: "TKP",
      question: "Ketika menghadapi deadline yang ketat, sikap yang sebaiknya Anda ambil adalah:",
      options: [
        { id: 'A', text: 'Menunda pekerjaan sampai mendekati deadline' },
        { id: 'B', text: 'Segera membuat rencana kerja dan melaksanakannya' },
        { id: 'C', text: 'Meminta perpanjangan waktu kepada atasan' },
        { id: 'D', text: 'Mengerjakan dengan asal-asalan agar cepat selesai' },
        { id: 'E', text: 'Menyerahkan tugas kepada rekan kerja' }
      ],
      userAnswer: "B",
      correctAnswer: "B",
      isCorrect: true,
      explanation: "Sikap yang paling tepat adalah membuat rencana kerja yang sistematis dan melaksanakannya dengan konsisten. Ini menunjukkan kemampuan manajemen waktu dan tanggung jawab yang baik."
    },
    {
      id: 10,
      category: "TKP",
      question: "Anda mendapat kritik yang membangun dari rekan kerja. Respon Anda:",
      options: [
        { id: 'A', text: 'Merasa tersinggung dan menghindar' },
        { id: 'B', text: 'Menerima dengan lapang dada dan berterima kasih' },
        { id: 'C', text: 'Membalas dengan kritik terhadapnya' },
        { id: 'D', text: 'Tidak menghiraukan kritik tersebut' },
        { id: 'E', text: 'Melaporkan kepada atasan' }
      ],
      userAnswer: "B",
      correctAnswer: "B",
      isCorrect: true,
      explanation: "Menerima kritik membangun dengan lapang dada menunjukkan kedewasaan dan keinginan untuk berkembang. Sikap ini mencerminkan karakter yang terbuka terhadap masukan dan perbaikan diri."
    },
    {
      id: 11,
      category: "TKP",
      question: "Dalam sebuah tim kerja, Anda menemukan anggota yang tidak berkontribusi optimal. Tindakan Anda:",
      options: [
        { id: 'A', text: 'Melaporkan langsung kepada atasan' },
        { id: 'B', text: 'Mengajak diskusi untuk mencari solusi bersama' },
        { id: 'C', text: 'Mengabaikan dan fokus pada tugas sendiri' },
        { id: 'D', text: 'Menggantikan pekerjaannya' },
        { id: 'E', text: 'Mengkritik di depan anggota tim lain' }
      ],
      userAnswer: "B",
      correctAnswer: "B",
      isCorrect: true,
      explanation: "Mengajak diskusi untuk mencari solusi bersama menunjukkan kemampuan komunikasi dan leadership yang baik. Pendekatan ini lebih konstruktif dan dapat memperbaiki kondisi tim secara keseluruhan."
    },
    {
      id: 12,
      category: "TKP",
      question: "Anda diminta mengerjakan tugas yang tidak sesuai dengan keahlian Anda. Sikap Anda:",
      options: [
        { id: 'A', text: 'Menolak dengan tegas' },
        { id: 'B', text: 'Menerima dan berusaha belajar sambil mengerjakan' },
        { id: 'C', text: 'Menerima namun mengerjakan seadanya' },
        { id: 'D', text: 'Meminta rekan lain menggantikan' },
        { id: 'E', text: 'Menunda sampai ada yang lebih ahli' }
      ],
      userAnswer: "",
      correctAnswer: "B",
      isCorrect: false,
      explanation: "Sikap terbaik adalah menerima tantangan dan berusaha belajar sambil mengerjakan. Ini menunjukkan adaptabilitas, kemauan belajar, dan komitmen terhadap tugas yang diberikan."
    }
  ]
};

// Main Result Page Component
export default function ResultPage() {
  return (
    <>
      {/* Result Header */}
      <ResultHeader
        title={resultData.title}
        date={resultData.date}
        duration={resultData.duration}
        totalScore={resultData.totalScore}
      />

      {/* Score and Details */}
      <CategoryProgress categories={resultData.categories} />

      {/* Question Review */}
      <QuestionReview questions={resultData.questions} />
    </>
  );
}