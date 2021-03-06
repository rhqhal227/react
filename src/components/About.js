import React, { Component } from 'react';

class About extends Component{
    render(){
        document.addEventListener("DOMContentLoaded", function(){
            document.getElementById('bodyMode').className = 'body_wrap body_about';
        });
        return(
            <section className="about wrapper">
                <h2 className="title about_title">Aboutπ</h2>
                <div className="about_txt">
                    <p>μλνμΈμ, μ λ μΉνΌλΈλ¦¬μμλλ€.<br />
                    λ€μν κ²½νμ ν΅ν΄ λ°°μ΄ κΈμ μ μΈ μν΅ λ°©μκ³Ό<br />
                    μλ¬΄μ νμν μ€ν¬μ νμ©νμ¬ μλ¬΄λ₯Ό μννκ² μ΅λλ€.<br />
                    κ°μ¬ν©λλ€.</p>
                </div>
                <div className="about_list">
                    <h3>Social experience_</h3>
                    <div className="wrapper">
                        <ul className="left">
                            <li>
                                <div className="year">2008 ~<br />2011</div>
                                <div className="list">
                                    <strong>κ΅λ΄ λμλ¦¬ λΌμ¨ κΈ°νλ¨</strong>
                                    <p>
                                        - κ΅λ΄ νμ¬ :<br />
                                        2008~2011λ κ΅λ΄ μΆμ , μ μμ μ€λ¦¬μνμ΄μ, 
                                        λ°©μ‘μΊ ν, νμμμ¬μ λ± 
                                        κΈ°ν κ΅λ΄ νμ¬ κΈ°ν λ° μ€κ³, μ§ν.<br /><br />
                                        - κ΅μΈ νμ¬ :<br />
                                        2008 yes apm λ¬Έν μ½μνΈ κΈ°ν & μ€κ³<br />
                                        2008 ν¬λ§ νμλ¦ λμΆμ  μ€κ³<br />
                                        2008 μνμ§ ETP μ½μνΈ μ μΌμ  μ§ν<br />
                                        2008 μμΈ νμ νμ΅ λμΆμ  μ€κ³<br />
                                        2008 μ κ΅­ λ―Έμ© κ²½μ§ λν κΈ°ν & μ€κ³<br />
                                        2008 μ²­μλ μ΄λ¦°μ΄ κΈ°μλ¨ μΆλ²μ μ§ν<br />
                                        2009 κ΅¬λ¦¬μ νμ νμ΅ λμΆμ  μ€κ³<br />
                                        2009 λΆμ² κ΅­μ  λ§ν λμΆμ  μ€κ³ λ° μ§ν 
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="year">2009 ~<br />2011</div>
                                <div className="list">
                                    <p>
                                        νΈμμ  - μλ₯΄λ°μ΄νΈ(2009.12~2010.11)<br />
                                        μ»€νΌμ λ¬Έμ  - μλ₯΄λ°μ΄νΈ(2011.3~2011.7)<br />
                                        μ£Όμ°¨μ₯μλ΄μμ - μλ₯΄λ°μ΄νΈ(2011.9)
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="year">2011 ~<br />2012</div>
                                <div className="list">
                                    <strong>μΈμ£Όμμ²΄ λμλΉμ</strong>
                                    <p>
                                        SBS, μ’νΈλ°©μ‘ λ± λ°©μ‘νλ‘κ·Έλ¨ λμλΉμ λ³΄μ‘°,<br />
                                        μΆμ°μ§ λ§μ΄ν¬ μ°©μ© λ° μ₯λΉ μ€μΉ, μ² μ.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapper">
                        <ul className="right">
                            <li>
                                <div className="year">2012</div>
                                <div className="list">
                                    <strong>λμΈμΌμ€νλ¦</strong>
                                    <p>
                                        μ¨λ© μμ νΈμ§ - νμμ & νμ΄λΌμ΄νΈ μμ<br />
                                        (νλ―Έλ¦¬μ΄ cs5, cs6μ¬μ©) / VDSLR μ΄¬μ,<br />
                                        μμμ© μ¨λ© μ¬μ§ λ³΄μ 
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="year">2012 ~<br />2015</div>
                                <div className="list">
                                    <strong>λμ§νλ μ½λ</strong>
                                    <p>
                                        νλ³΄ μμ κΈ°ν λ° μ μ<br />
                                        νλ³΄ μμ, μμ μμ λ± μ΄¬μ λ³΄μ‘° λ° νΈμ§ / λ©μ΄νΉ νλ¦ μ΄¬μ λ° νΈμ§
                                        - λ©λ‘  μ€νλλ μ½λ μμ μ μ<br />
                                        - μΈλ λ?€μ§μ λ?€μ§λΉλμ€ μ μ<br />
                                        - νλμλμ°¨ Mighty, Xcient κ΄λ ¨ μμ μΈ λ€μ μ μ<br />
                                        - λͺ¨λ°μΌκ²μ νλ³΄μ΄¬μ λ©μ΄νΉ νλ¦ μ μ<br />
                                        - 2014, 2015 KBS νΈλ‘νΈλμΆμ  VCRμμ μ μ<br />
                                        - ν΅μΌλΆ μ°ν λ¨λΆκ΅λ₯νλ ₯μ§μνν κ΅μ‘ λμμ μ μ<br />
                                        λ±
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="year">2016 ~<br />2017</div>
                                <div className="list">
                                    <strong>μ λΉν¬μ½λ¦¬μ</strong>
                                    <p>
                                        μΉλμμΈ λ° νΌλΈλ¦¬μ±(μλνλ μ€ μ¬μ©)<br />
                                        - Rapigen : <a href="http://rapigen-inc.com/wp/" target="_blank" rel="noopener noreferrer" title="μμ°½">http://rapigen-inc.com/wp/</a><br />
                                        - Uwin C&T : <a href="http://ifromkorea.com/" target="_blank" rel="noopener noreferrer" title="μμ°½">http://ifromkorea.com/</a><br />
                                        λ±
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="about_img">
                    <img src="image/bg_about1.jpg" alt="about_img1" className="img1" />
                    <img src="image/bg_about2.jpg" alt="about_img2" className="img2" />
                </div>
            </section>
        )
    }
}

export default About;