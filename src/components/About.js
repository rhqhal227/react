import React, { Component } from 'react';

class About extends Component{
    render(){
        document.addEventListener("DOMContentLoaded", function(){
            document.getElementById('bodyMode').className = 'body_wrap body_about';
        });
        return(
            <section className="about wrapper">
                <h2 className="title about_title">About🙂</h2>
                <div className="about_txt">
                    <p>안녕하세요, 저는 웹퍼블리셔입니다.<br />
                    다양한 경험을 통해 배운 긍정적인 소통 방식과<br />
                    업무에 필요한 스킬을 활용하여 업무를 수행하겠습니다.<br />
                    감사합니다.</p>
                </div>
                <div className="about_list">
                    <h3>Social experience_</h3>
                    <div className="wrapper">
                        <ul className="left">
                            <li>
                                <div className="year">2008 ~<br />2011</div>
                                <div className="list">
                                    <strong>교내 동아리 라온 기획단</strong>
                                    <p>
                                        - 교내 행사 :<br />
                                        2008~2011년 교내 축제, 신입생 오리엔테이션, 
                                        방송캠프, 학위수여식 등 
                                        기타 교내 행사 기획 및 중계, 진행.<br /><br />
                                        - 교외 행사 :<br />
                                        2008 yes apm 문화 콘서트 기획 & 중계<br />
                                        2008 희망 한아름 대축제 중계<br />
                                        2008 서태지 ETP 콘서트 전야제 진행<br />
                                        2008 서울 평생 학습 대축제 중계<br />
                                        2008 전국 미용 경진 대회 기획 & 중계<br />
                                        2008 청와대 어린이 기자단 출범식 진행<br />
                                        2009 구리시 평생 학습 대축제 중계<br />
                                        2009 부천 국제 만화 대축제 중계 및 진행 
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="year">2009 ~<br />2011</div>
                                <div className="list">
                                    <p>
                                        편의점 - 아르바이트(2009.12~2010.11)<br />
                                        커피전문점 - 아르바이트(2011.3~2011.7)<br />
                                        주차장안내요원 - 아르바이트(2011.9)
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="year">2011 ~<br />2012</div>
                                <div className="list">
                                    <strong>외주업체 동시녹음</strong>
                                    <p>
                                        SBS, 종편방송 등 방송프로그램 동시녹음 보조,<br />
                                        출연진 마이크 착용 및 장비 설치, 철수.
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
                                    <strong>나인센스필름</strong>
                                    <p>
                                        웨딩 영상 편집 - 풀영상 & 하이라이트 영상<br />
                                        (프미리어 cs5, cs6사용) / VDSLR 촬영,<br />
                                        영상용 웨딩 사진 보정
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="year">2012 ~<br />2015</div>
                                <div className="list">
                                    <strong>디지탈레코드</strong>
                                    <p>
                                        홍보 영상 기획 및 제작<br />
                                        홍보 영상, 음악 영상 등 촬영 보조 및 편집 / 메이킹 필름 촬영 및 편집
                                        - 멜론 오프더레코드 영상 제작<br />
                                        - 인디 뮤지션 뮤직비디오 제작<br />
                                        - 현대자동차 Mighty, Xcient 관련 영상 외 다수 제작<br />
                                        - 모바일게임 화보촬영 메이킹 필름 제작<br />
                                        - 2014, 2015 KBS 트로트대축제 VCR영상 제작<br />
                                        - 통일부 산하 남북교류협력지원협회 교육 동영상 제작<br />
                                        등
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="year">2016 ~<br />2017</div>
                                <div className="list">
                                    <strong>유비크코리아</strong>
                                    <p>
                                        웹디자인 및 퍼블리싱(워드프레스 사용)<br />
                                        - Rapigen : <a href="http://rapigen-inc.com/wp/" target="_blank" rel="noopener noreferrer" title="새창">http://rapigen-inc.com/wp/</a><br />
                                        - Uwin C&T : <a href="http://ifromkorea.com/" target="_blank" rel="noopener noreferrer" title="새창">http://ifromkorea.com/</a><br />
                                        등
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