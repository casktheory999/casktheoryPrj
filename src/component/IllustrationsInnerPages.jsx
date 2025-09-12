import React from 'react'
import '../scss/IllustrationsInnerPages.scss'

const IllsInnerData = {
  Vodka: {
    zh: '伏特加',
    en: "Vodka",
    Practice: '伏特加源自俄語「водка」，意即「小水」。主要以<span>穀物</span>或<span>馬鈴薯</span>發酵蒸餾後，再透過活性碳過濾製成，因此伏特加通常<span>純淨無色</span>且味道清爽、無雜質。',
    Taste: '市面上的伏特加種類眾多，有俄羅斯式口感濃烈、波蘭式偏圓潤，另有加入水果或香料的調味伏特加，適合<span>初次接觸</span>的人。由於伏特加味道<span>清淡<span>，可純飲也可作為基底調製螺絲起子、血腥瑪麗、伏特加馬丁尼等經典調酒。',
    Suggestions: '品飲建議：<span>冰鎮後純飲</span>最能感受其純淨特色，搭配果汁、氣泡飲料調製，口感更豐富。',
    backgroundImage: 'url(images/IllustrationsInnerPagesVodka.png)',
    imgs: [
      { src: "/images/grade1.png", alt: "香味複雜度" },
      { src: "/images/grade1.png", alt: "甜感" },
      { src: "/images/grade4.png", alt: "清爽感" },
      { src: "/images/grade4.png", alt: "酒精強度" },
      { src: "/images/grade1.png", alt: "酒體厚重感" },
    ],
  },
  Gin: {
    zh: '琴酒',
    en: "Gin",
    Practice: '琴酒（Gin）起源於17世紀的荷蘭，最初用於醫藥用途。主要透過<span>穀物</span>發酵後蒸餾，並加入<span>杜松子</span>、<span>香草</span>和多種植物藥材，因此帶有鮮明的草本與杜松子的香氣。',
Taste: '目前市面上的琴酒種類豐富，包括傳統的倫敦乾琴酒（London Dry Gin）、口感柔和的新式琴酒（New Western Gin），以及加入花香或水果風味的調味琴酒，滿足不同口味需求。琴酒風味<span>清新</span>、<span>辛辣</span>，適合純飲或作為馬丁尼、琴湯尼等經典調酒基底。',
Suggestions: '品飲建議：建議加入<span>冰塊</span>與<span>檸檬片</span>，凸顯琴酒獨特的草本芳香。',
    backgroundImage: 'url(images/IllustrationsInnerPagesVodka.png)',
    imgs: [
      { src: "/images/grade4.png", alt: "香味複雜度" },
      { src: "/images/grade1.png", alt: "甜感" },
      { src: "/images/grade3.png", alt: "清爽感" },
      { src: "/images/grade4.png", alt: "酒精強度" },
      { src: "/images/grade2.png", alt: "酒體厚重感" },
    ],
  },
  Rum: {
    zh: '蘭姆酒',
    en: "Rum",
    Practice: '蘭姆酒起源於加勒比海地區，主要以<span>甘蔗汁</span>或<span>糖蜜</span>發酵後蒸餾，再於橡木桶中陳釀製成。',
    Taste: '市面上的蘭姆酒風格多元，包括未經陳釀的白蘭姆（清新且帶有淡淡甘蔗香氣）、經橡木桶短期陳釀的金蘭姆（口感圓潤柔順）、以及長期陳釀、口感豐富複雜的深色蘭姆酒（帶有焦糖、香料、木質氣息）。蘭姆酒口感<span>甜美醇厚</span>，帶有熱帶水果、香草與焦糖香氣，是莫西多、自由古巴等經典調酒的主要基酒。',
    Suggestions: '品飲建議：<span>純飲</span>或<span>加入冰塊</span>，亦可搭配熱帶果汁，增添清爽與豐富的層次。',
    backgroundImage: 'url(images/IllustrationsInnerPagesVodka.png)',
    imgs: [
      { src: "/images/grade3.png", alt: "香味複雜度" },
      { src: "/images/grade4.png", alt: "甜感" },
      { src: "/images/grade2.png", alt: "清爽感" },
      { src: "/images/grade4.png", alt: "酒精強度" },
      { src: "/images/grade3.png", alt: "酒體厚重感" },
    ],
  },
  Tequila: {
    zh: '龍舌蘭',
    en: "Tequila",
    Practice: '龍舌蘭酒起源於墨西哥，以<span>藍色龍舌蘭植物的中心部分</span>蒸煮後萃取汁液，經發酵蒸餾而成。',
    Taste: '龍舌蘭酒主要分為白色（Blanco，未經陳釀）、金色（Reposado，陳釀數月至一年）、以及深色（Añejo，陳釀一年以上），各具特色。口感<span>濃郁強烈</span>，帶有獨特的泥土、辛辣與植物芳香，展現墨西哥的熱情與活力。常見用於瑪格麗特、特基拉日出等經典調酒。',
    Suggestions: '品飲建議：純飲可搭配<span>鹽巴</span>和<span>檸檬</span>，冰涼後飲用，更顯清新，或調製成<span>雞尾酒</span>享受其豐富層次。',
    backgroundImage: 'url(images/IllustrationsInnerPagesVodka.png)',
    imgs: [
      { src: "/images/grade3.png", alt: "香味複雜度" },
      { src: "/images/grade2.png", alt: "甜感" },
      { src: "/images/grade3.png", alt: "清爽感" },
      { src: "/images/grade4.png", alt: "酒精強度" },
      { src: "/images/grade3.png", alt: "酒體厚重感" },
    ],
  },
  Whiskey: {
    zh: '威士忌',
    en: "Whiskey",
    Practice: '威士忌起源於蘇格蘭和愛爾蘭，以<span>大麥</span>、<span>玉米</span>、<span>裸麥</span>等穀物發酵後蒸餾，再經橡木桶長期陳釀而成。',
    Taste: '威士忌種類繁多，包括口感濃郁、煙燻味明顯的蘇格蘭單一麥芽威士忌（Single Malt），口感較柔和甜潤的愛爾蘭威士忌（Irish Whiskey），以及風味多元的美國波本威士忌（Bourbon）等。威士忌風味<span>豐富</span>，帶有木質、香草、焦糖甚至水果氣息，層次多樣。',
    Suggestions: '品飲建議：可<span>純飲</span>或加入<span>冰塊</span>慢飲，亦適合調製經典調酒如Old Fashioned、Highball，展現不同風味層次。',
    backgroundImage: 'url(images/IllustrationsInnerPagesVodka.png)',
    imgs: [
      { src: "/images/grade4.png", alt: "香味複雜度" },
      { src: "/images/grade2.png", alt: "甜感" },
      { src: "/images/grade1.png", alt: "清爽感" },
      { src: "/images/grade5.png", alt: "酒精強度" },
      { src: "/images/grade4.png", alt: "酒體厚重感" },
    ],
  },
  Brandy: {
    zh: '白蘭地',
    en: "Brandy",
    Practice: '白蘭地最初源於荷蘭，以<span>葡萄</span>或<span>其他水果</span>經過發酵蒸餾，再於橡木桶中長時間陳釀製成。',
    Taste: '市面上的白蘭地種類包括著名的干邑（Cognac）、雅文邑（Armagnac）及各種水果白蘭地。干邑口感柔順圓潤，帶有香草、堅果及果乾氣息；雅文邑則帶有更豐富的香料和花果香。水果白蘭地則帶有明顯的水果香氣。白蘭地<span>溫潤醇厚</span>，適合飯後純飲或作為調酒基底。',
    Suggestions: '品飲建議：建議用<span>溫暖酒杯緩緩純飲</span>，或搭配<span>咖啡</span>和<span>甜點</span>增添層次與風味。',
    backgroundImage: 'url(images/IllustrationsInnerPagesVodka.png)',
    imgs: [
      { src: "/images/grade4.png", alt: "香味複雜度" },
      { src: "/images/grade3.png", alt: "甜感" },
      { src: "/images/grade1.png", alt: "清爽感" },
      { src: "/images/grade4.png", alt: "酒精強度" },
      { src: "/images/grade4.png", alt: "酒體厚重感" },
    ],
  },
  Daiquiri: {
    zh: '黛綺麗',
    en: "Daiquiri",
    Practice: '黛綺麗起源於19世紀末的<span>古巴</span>，據說由一位美國礦工在Daiquiri鎮發明，後來在哈瓦那的酒吧中廣為流行。',
    Taste: '傳統做法簡單，僅需三種材料：<span>白蘭姆酒</span>、<span>新鮮萊姆汁</span>與<span>糖漿</span>，經搖盪後倒入冷卻杯中即可。這杯調酒完美平衡酸與甜，<span>入口清爽、酒感適中</span>，帶有柑橘與甘蔗的自然風味，是熱帶地區經典的消暑選擇。雖然後來出現了草莓黛綺麗等變化型，但經典原味仍最為耐喝。',
    Suggestions: '品飲建議：用<span>碎冰搖盪</span>後飲用，萊姆汁要<span>新鮮現榨</span>，才能展現最純正的風味。適合在夏天午後或輕鬆聚會中享用。',
    backgroundImage: 'url(images/IllustrationsInnerPagesVodka.png)',
    imgs: [
      { src: "/images/grade3.png", alt: "香味複雜度" },
      { src: "/images/grade2.png", alt: "甜感" },
      { src: "/images/grade5.png", alt: "清爽感" },
      { src: "/images/grade3.png", alt: "酒精強度" },
      { src: "/images/grade1.png", alt: "酒體厚重感" },
    ],
  },
  Negroni: {
    zh: '內格羅尼',
    en: "Negroni",
    Practice: '內格羅尼於1919年誕生於<span>義大利佛羅倫斯</span>，一位名叫卡米洛·內格羅尼的伯爵希望將當時流行的Americano調酒升級，於是請酒保將<span>蘇打水換成琴酒</span>，誕生了這杯同名的Negroni。',
    Taste: '它以等量的<span>琴酒</span>、<span>金巴利</span>（Campari）和<span>甜苦艾酒</span>（Vermouth Rosso）調製，呈現出均衡的苦甘風味與濃厚柑橘香氣。酒體橘紅，外型亮眼，風格獨特，是調酒愛好者公認的經典之一。',
    Suggestions: '品飲建議：<span>加冰攪拌</span>後倒入老式杯，搭配<span>橙皮</span>或<span>橙片</span>點綴，能讓風味更為圓潤馥郁。',
    backgroundImage: 'url(images/IllustrationsInnerPagesVodka.png)',
    imgs: [
      { src: "/images/grade5.png", alt: "香味複雜度" },
      { src: "/images/grade2.png", alt: "甜感" },
      { src: "/images/grade2.png", alt: "清爽感" },
      { src: "/images/grade5.png", alt: "酒精強度" },
      { src: "/images/grade4.png", alt: "酒體厚重感" },
    ],
  },
  Sidecar: {
    zh: '邊車',
    en: "Sidecar",
    Practice: '邊車誕生於第一次世界大戰後的<span>巴黎</span>，據說是為了紀念一位常搭乘<span>摩托車側車</span>（Sidecar）前往酒吧的軍官而命名。',
    Taste: '它以<span>白蘭地</span>、<span>橙酒</span>（如君度 Cointreau）與<span>新鮮檸檬汁</span>依比例調製，入口時酸甜均衡，口感清爽且酒體集中，既優雅又具力道。作為經典酸型調酒代表之一，邊車展現出白蘭地的<span>溫潤</span>與柑橘的<span>鮮明香氣</span>，是許多經典調酒師的考驗之作。',
    Suggestions: '品飲建議：建議杯緣<span>沾糖</span>後冷飲，可使用<span>干邑</span>提升香氣深度，檸檬汁請選用<span>現榨</span>以保風味純正。',
    backgroundImage: 'url(images/IllustrationsInnerPagesVodka.png)',
    imgs: [
      { src: "/images/grade4.png", alt: "香味複雜度" },
      { src: "/images/grade2.png", alt: "甜感" },
      { src: "/images/grade3.png", alt: "清爽感" },
      { src: "/images/grade4.png", alt: "酒精強度" },
      { src: "/images/grade3.png", alt: "酒體厚重感" },
    ],
  },
  Cosmopolitan: {
    zh: '柯夢波丹',
    en: "Cosmopolitan",
    Practice: '柯夢波丹誕生於1980年代美國<span>紐約</span>，因《<span>慾望城市</span>》劇中角色凱莉鍾愛這杯酒而爆紅，成為女性時尚代表飲品。',
    Taste: '調製方式為<span>伏特加</span>、<span>橙酒（君度）</span>、<span>蔓越莓汁</span>與<span>新鮮萊姆汁</span>調和後搖盪，顏色呈現迷人的粉紅紅寶石色。風味清爽微酸，果香濃郁，酒精感低但層次明顯，適合喜歡酸甜風味的飲者。',
    Suggestions: '品飲建議：搖盪後倒入冷卻的馬丁尼杯中，搭配一片<span>檸檬皮</span>或<span>橙皮</span>增添香氣，是派對與約會的熱門選擇。',
    backgroundImage: 'url(images/IllustrationsInnerPagesVodka.png)',
    imgs: [
      { src: "/images/grade3.png", alt: "香味複雜度" },
      { src: "/images/grade3.png", alt: "甜感" },
      { src: "/images/grade4.png", alt: "清爽感" },
      { src: "/images/grade3.png", alt: "酒精強度" },
      { src: "/images/grade2.png", alt: "酒體厚重感" },
    ],
  },
  LongIslandIcedTea: {
    zh: '長島冰茶',
    en: "Long Island Iced Te",
    Practice: '長島冰茶並不含茶，名字源自其外觀與冰紅茶相似。此調酒起源於1970年代的<span>紐約長島</span>，據傳是由酒保羅柏特·巴特（Robert Butt）為參加調酒比賽而創作。',
    Taste: '它結合<span>伏特加</span>、<span>琴酒</span>、<span>蘭姆酒</span>、<span>龍舌蘭</span>與<span>橙酒</span>（Triple Sec），再加上<span>檸檬汁</span>與<span>可樂</span>調和，創造出多層次且酒精濃度極高的調酒。風味甜中帶酸，入口順暢卻後勁十足，是派對與夜店常見的強勢選擇。',
    Suggestions: '品飲建議：使用<span>搖盪法</span>調製，加冰倒入長杯中，最後緩緩倒入可樂製造漸層視覺效果，適合喜歡重口味的飲者。',
    backgroundImage: 'url(images/IllustrationsInnerPagesVodka.png)',
    imgs: [
      { src: "/images/grade3.png", alt: "香味複雜度" },
      { src: "/images/grade4.png", alt: "甜感" },
      { src: "/images/grade3.png", alt: "清爽感" },
      { src: "/images/grade5.png", alt: "酒精強度" },
      { src: "/images/grade3.png", alt: "酒體厚重感" },
    ],
  },
  TequilaSunrise: {
    zh: '龍舌蘭日出',
    en: "Tequila Sunrise",
    Practice: '龍舌蘭日出誕生於20世紀初的美國<span>亞利桑那州</span>，名稱來自其絢爛的漸層色彩，彷彿日出時的天空。',
    Taste: '這款調酒使用<span>龍舌蘭</span>、<span>柳橙汁</span>與<span>紅石榴糖漿</span>調製而成，紅色糖漿沉於杯底，上層金黃清透，外觀極具視覺效果。風味上酸甜平衡，柳橙的果香與糖漿的微甜巧妙融合，龍舌蘭則提供清新的辛香基底。因為<span>口感親和</span>、<span>酒感適中</span>，深受新手與派對族群喜愛。',
    Suggestions: '品飲建議：將龍舌蘭與柳橙汁先搖盪後倒入加冰的高球杯，再緩緩注入紅石榴糖漿，<span>切勿攪拌</span>，以維持美麗的漸層。',
    backgroundImage: 'url(images/IllustrationsInnerPagesVodka.png)',
    imgs: [
      { src: "/images/grade2.png", alt: "香味複雜度" },
      { src: "/images/grade5.png", alt: "甜感" },
      { src: "/images/grade5.png", alt: "清爽感" },
      { src: "/images/grade3.png", alt: "酒精強度" },
      { src: "/images/grade2.png", alt: "酒體厚重感" },
    ],
  },
}

const IllustrationsInnerPages = ({drinkType='Vodka'}) => {
  const drinkData=IllsInnerData[drinkType]||IllsInnerData.Vodka;
  return (
    <section className='B_IllustrationsInnerPages'  style={{ '--background-image': drinkData.backgroundImage }}>
      <div className='B_left'>
        <div className='B_title'>
          <h2 className='B_titleZh'>{drinkData.zh}</h2>
          <h3 className='B_titleEn'>{drinkData.en}</h3>
        </div>
        <div className='B_introduceBox'>
          <p className='B_introducePractice' dangerouslySetInnerHTML={{ __html: drinkData.Practice }}/>
          <p className='B_introduceTaste' dangerouslySetInnerHTML={{ __html: drinkData.Taste }}/>
          <p className='B_introduceSuggestions' dangerouslySetInnerHTML={{ __html: drinkData.Suggestions }}/>
        </div>
      </div>
      <div className='B_right'>
        {drinkData.imgs.map((img, index) => (
          <div key={index} className='B_powerImg'>
            <img src={img.src} alt={img.alt} />
            <span>{img.alt}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default IllustrationsInnerPages