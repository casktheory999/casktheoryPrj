import React from 'react'
import '../scss/IllustrationsInnerPages.scss'

const IllustrationsInnerPages = () => {
  return (
    <section className='B_IllustrationsInnerPages'>
      <div className='B_left'>
        <div className='B_title'>
          <h2 className='B_titleZh'>伏特加</h2>
          <h3 className='B_titleEn'>Vodka</h3>
        </div>
        <div className='B_introduceBox'>
          <p className='B_introducePractice'>
            伏特加源自俄語「водка」，意即「小水」。主要以<span>穀物</span>或<span>馬鈴薯</span>發酵蒸餾後，再透過活性碳過濾製成，因此伏特加通常<span>純淨無色</span>且味道清爽、無雜質。
          </p>
          <p className='B_introduceTaste'>
            市面上的伏特加種類眾多，有俄羅斯式口感濃烈、波蘭式偏圓潤，另有加入水果或香料的調味伏特加，適合初次接觸的人。由於伏特加味道清淡，可純飲也可作為基底調製螺絲起子、血腥瑪麗、伏特加馬丁尼等經典調酒。
          </p>
          <p className='B_introduceSuggestions'>
            品飲建議：<span>冰鎮後純飲</span>最能感受其純淨特色，搭配果汁、氣泡飲料調製，口感更豐富。
          </p>
        </div>
      </div>
      <div className='B_right'>
        <div className='B_powerImg'>
          <img src="/images/grade1.png" alt="香味複雜度" />
          <span>香味複雜度</span>
        </div>
        <div className='B_powerImg'>
          <img src="/images/grade2.png" alt="甜感" />
          <span>甜感</span>
        </div>
        <div className='B_powerImg'>
          <img src="/images/grade3.png" alt="清爽感" />
          <span>清爽感</span>
        </div>
        <div className='B_powerImg'>
          <img src="/images/grade4.png" alt="酒精強度" />
          <span>酒精強度</span>
        </div>
        <div className='B_powerImg'>
          <img src="/images/grade5.png" alt="酒體厚重感" />
          <span>酒體厚重感</span>
        </div>
      </div>
    </section>
  )
}

export default IllustrationsInnerPages