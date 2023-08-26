import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>sasha lox</div>
      <div className="text-center mt-10">
        <h2 className="text-[24px]">roadmap(шо треба вчить)</h2>
        <div className="flex items-center justify-center mt-10  text-[24px]">
          <div className="mr-10">
            <span>interactive roadmap:</span>
            <a href="https://roadmap.sh/frontend?r=frontend-beginner">
              <Image
                className="w-[300px] h-[170px] mt-5"
                src="https://miro.medium.com/v2/resize:fit:1400/1*xJdg7MNse8ty5LKU2f6pOg.png"
                alt={""}
                width={300}
                height={200}
              ></Image>
            </a>
          </div>
          <div>
            <span>video:</span>
            <a href="https://www.youtube.com/watch?v=bNM9TFsSJHA">
              <Image
                className="w-[300px] h-[170px] mt-5"
                src="https://i.ytimg.com/an_webp/XOGmPtEKn7c/mqdefault_6s.webp?du=3000&sqp=CNyMpacG&rs=AOn4CLD7fy2WNRyTdf1KmDB58HwS5YhhKA"
                alt={""}
                width={300}
                height={200}
              ></Image>
            </a>
          </div>
        </div>
        <p className="w-[800px] mx-auto mt-10 text-[18px]">
          короче это просто чтоб понимать что в принципе тебя ждет как
          разработчика, какие языки надо учить. слева сайт классный тем что он
          дает материал для обучения если выбрать там что угодно. справа видос
          тоже хорош к ознакомлению.
        </p>
        <div className="mt-10">
          <h2 className="text-[24px] mb-5">конспект из курсов по штмл:</h2>
          <a
            className="underline text-[18px]"
            href="https://docs.google.com/document/d/1lOpYDMsmbQ1e8tkB-j28niH7qEBEL9lzXe8tLT8IBM0/edit?usp=sharing"
          >
            https://docs.google.com/document/d/1lOpYDMsmbQ1e8tkB-j28niH7qEBEL9lzXe8tLT8IBM0
          </a>
          <p className="mt-5">
            тут просто конспектик по штмлю. основы, теги все дела бла бла бла.
            внутри есть вебинарі, оні долгие, смотреть можно на 1.25х,
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-[24px] mb-5">конспект из курсов по css:</h2>
          <a
            className="underline text-[18px]"
            href="https://docs.google.com/document/d/1EAGhifWfa08_sAoV9I2TcocwhZwfJToq3Lrqgaz9roY/edit?usp=sharing"
          >
            https://docs.google.com/document/d/1EAGhifWfa08_sAoV9I2TcocwhZwfJToq3Lrqgaz9roY
          </a>
          <p className="mt-5">
            а это конспект по цсс. сладость) с відосами все так же как и с аштмл
          </p>
        </div>
      </div>
    </main>
  );
}
