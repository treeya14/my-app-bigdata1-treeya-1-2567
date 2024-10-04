import React from "react";
export default function GetApp() {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden shadow-lg p-16 mb-5 bg-white rounded">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Machine Learning
                </span>
                {/* <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span> */}
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  AI ตรวจวินิจฉัยโรคหัวใจ
                </h2>
                <p className="leading-relaxed">
                  Machine Learning คือ ส่วนการเรียนรู้ของเครื่อง
                  ถูกใช้งานเสมือนเป็นสมองของ AI (Artificial Intelligence)
                  เราอาจพูดได้ว่า AI ใช้ Machine Learning ในการสร้างความฉลาด
                  มักจะใช้เรียกโมเดลที่เกิดจากการเรียนรู้ของปัญญาประดิษฐ์
                  ไม่ได้เกิดจากการเขียนโดยใช้มนุษย์
                  มนุษย์มีหน้าที่เขียนโปรแกรมให้ AI (เครื่อง)
                  เรียนรู้จากข้อมูลเท่านั้น ที่เหลือเครื่องจัดการเอง
                </p>
                <a
                  href="http://127.0.0.1:8000/"
                  target="_blank"
                  rel="noopener norefferer"
                  className="text-indigo-500 inline-flex items-center mt-4"
                >
                  คลิกตรวจวินิจฉัยโรคหัวใจได้ที่นี้
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Deep Learning
                </span>
                {/* <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span> */}
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  AI ตรวจวินิจฉัยโรคมะเร็งผิวหนัง
                </h2>
                <p className="leading-relaxed">
                  มะเร็งผิวหนัง Melanoma เป็นมะเร็งผิวหนังชนิดที่ร้ายแรงที่สุด
                  เป็นมะเร็งผิวหนังชนิดที่คร่าชีวิตคนมากที่สุด ในปี 2015 ทั่วโลก
                  มีการตรวจพบ Melanoma มากกว่า 350,000 เคส โดยมีผู้ป่วยเสียชีวิต
                  60,000 คน ถึงแม้อัตราการเสียชีวิตจะสูง
                  แต่ถ้ามีการวินิจฉัยโรคมะเร็งผิวหนังที่ง่ายขึ้น
                  ตรวจพบตั้งแต่ระยะเริ่มต้น และรักษาได้อย่างทันท่วงที
                  เราจะสามารถเพิ่มอัตราการรอดชีวิต ได้มากกว่า 95%
                </p>
                <a
                  href="http://127.0.0.1:5000/index"
                  target="_blank"
                  rel="noopener norefferer"
                  className="text-indigo-500 inline-flex items-center mt-4"
                >
                  คลิกตรวจวินิจฉัยโรคมะเร็งผิวหนังได้ที่นี้
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                  {/* </Link> */}
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  ChatGPT
                </span>
                {/* <span className="text-sm text-gray-500">12 Jun 2019</span> */}
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  การสนทนา ChatBot
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
