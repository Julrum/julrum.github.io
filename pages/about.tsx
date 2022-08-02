import dynamic from 'next/dynamic';
import Head from 'next/head';

import BigParagraph from 'components/atoms/BigParagraph';
import OutLink from 'components/atoms/OutLink';
import Title from 'components/molecules/Title';
import AboutContentLayout from 'components/templates/AboutContentLayout';
import Layout from 'components/templates/Layout';
import Row from 'components/templates/Row';

const SideList = dynamic(() => import('components/atoms/SideList'));
const Project = dynamic(() => import('components/molecules/Project'));
const SideListLayout = dynamic(
  () => import('components/templates/SideListLayout'),
);

const About = () => (
  <Layout customMeta={{ title: 'Junwon Park | Resume' }}>
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
    <article>
      <Title
        githubLink="https://github.com/Julrum"
        linkedinLink="https://www.linkedin.com/in/julrum/"
        mailLink="mailto:junwon@duck.com"
        title="새로운 것을 끊임없이 탐구하는 개발자 박준원입니다."
      />
      <AboutContentLayout>
        <BigParagraph>
          <p>
            &nbsp;2년 차 개발자로 스타트업에서 웹 서비스를
            기획/개발/배포/운영하였습니다. 주로 웹 서비스 개발을 담당하였으며
            PO(Product Owner) 역할을 겸하였습니다.
          </p>
          <p>
            &nbsp;코드 컨벤션을 설정하여 일관성을 유지하는 것을 좋아하며 같은
            기능을 하는 코드도 알아보기 쉽게 간단한 코드로 작성하고 있습니다.
            레거시 코드를 리팩터링하고 개선하는 것을 즐겨합니다.
          </p>
          <p>
            &nbsp;혼자서의 개발보다는 동료들과의 끊임없는 커뮤니케이션을 통해
            협업하는 것을 더 선호합니다. 국방부에서 진행한 프로젝트에서도
            동료들과의 계속된 소통으로 서로의 생각을 정리하고 공유하여
            성공적으로 프로젝트를 끝마친 경험이 있습니다.
          </p>
        </BigParagraph>
        <h2>Work Experience</h2>
        <Row
          companyName="볼트마이크로"
          role="Frontend Developer"
          dateFrom="2022-01"
        >
          <Project
            description={
              <p>
                프로젝트 수행 역할 서비스 중인 앱의 구독과 부가기능을 위한 B2B
                대시보드 페이지 제작 프로젝트입니다. 계정 정보 및 구독 상태를 볼
                수 있는 계정 페이지 프로젝트 설계부터 디자인, 개발을 맡았습니다.
              </p>
            }
            skill="Typescript, Next.Js, Mui, Styled-components, firebase, Storybook"
            dateFrom="2022-02"
            title="B2B 대시보드 페이지"
          >
            <ul>
              <li>프론트엔드 기술환경 구성 및 기본 기능 구현</li>
              <li>Mui와 styled-components를 결합한 커스텀 글로벌 테마 개발</li>
              <li>스토리북을 이용한 컴포넌트 기반 개발</li>
              <li>Firebase를 사용한 스토어 디자인</li>
              <li>React기반 컴포넌트 계층 구조 디자인</li>
              <li>paddle을 이용한 구독 서비스 개발</li>
            </ul>
          </Project>
          <Project
            description={
              <p>
                서비스 중인 앱 내에 Webview 상에 띄울 각종 종목의 스코어보드 및
                타이머 제작 프로젝트 입니다. 온보딩 과정이었으며 가볍게 제작하기
                위해 Vanilla Javascript를 사용하였습니다.
              </p>
            }
            skill="Javascript, CSS, HTML5"
            dateFrom="2022-01"
            dateTo="2022-02"
            title="스코어보드 및 타이머 제작"
          >
            <ul>
              <li>프론트엔드 기술환경 구성 및 모든 기능 구현</li>
              <li>다양한 브라우저 환경 및 사이즈 대응</li>
              <li>
                BroadcastChannel을 이용하여 컨트롤러와 뷰어간의 통신이
                가능하도록 구현
              </li>
            </ul>
          </Project>
        </Row>
        <Row
          additional={
            <OutLink
              label="추천서 보기"
              link="https://drive.google.com/file/d/16fqD52QfKeZN4-QQokJx-mFzAiulpEZu/view?usp=sharing"
            />
          }
          companyName="대한민국 국방부"
          role="SW 개발병"
          dateFrom="2019-05"
          dateTo="2020-12"
        >
          <Project
            description={
              <p>
                워드와 엑셀 파일을 웹 내에서 특정 라인 및 셀 강조 표시, 커멘트
                기능이 있는 웹페이지 제작 프로젝트입니다. 프로젝트 기획, 디자인,
                개발 전 과정에 참여하였습니다. Antd를 사용했던 이전 프로젝트와
                달리 모든 컴포넌트를 직접 디자인 개발하였습니다.
              </p>
            }
            skill="Typescript, React, Redux, styled-components, React Router"
            dateFrom="2020-08"
            dateTo="2020-12"
            title="워드, 엑셀 웹 뷰어"
          >
            <ul>
              <li>프론트엔드 기술환경 구성 및 핵심 기능 구현</li>
              <li>Redux, Redux-Saga를 사용한 스토어 디자인</li>
              <li>React기반 컴포넌트 계층 구조 디자인</li>
              <li>Atomic 디자인</li>
              <li>Lazy loading을 사용한 뷰어 최적화</li>
            </ul>
          </Project>
          <Project
            description={
              <p>
                국방부 망 내에서 사용 가능한 대시보드 웹페이지 제작
                프로젝트입니다. 프로젝트 중간부터 참여하였습니다. 유지보수 및
                아직 개발되지 않은 새로운 기능을 개발하였습니다.
              </p>
            }
            skill="Javascript, React, Antd, Redux, styled-components, React Router"
            dateFrom="2019-06"
            dateTo="2019-09"
            title="대시보드 페이지"
          >
            <ul>
              <li>
                테이블 컴포넌트가 사용된 페이지의 성능 개선 및 정렬 기능 구현
              </li>
              <li>Ant Design 라이브러리를 활용하여 컴포넌트를 사용 및 개조</li>
            </ul>
          </Project>
        </Row>

        <h2>Other Experiences</h2>
        <Row
          companyName="한양대학교"
          dateFrom="2017-03"
          role="컴퓨터소프트웨어학부 전공"
        >
          <Project
            description={
              <p>
                한양대학교 소프트웨어스튜디오2 수업 과제로 대선 관련 정보를 모아
                볼 수 있는 웹페이지를 제작 프로젝트 입니다. 팀원 4명이서
                진행하였으며 팀장을 맡아 기획, 디자인 개발 등 전 과정을
                담당하였습니다.
              </p>
            }
            githubLink="https://github.com/Julrum/ITE3068_team8"
            skill="Javascript, React, AWS Amplify, GraphQL, styled-components"
            dateFrom="2021-11"
            dateTo="2021-12"
            title="대선 뉴스 모아보기 페이지"
          >
            <ul>
              <li>프론트엔드 기술환경 구성 및 기본 기능 구현</li>
              <li>
                AWS Amplify를 이용한 회원 정보 관리 및 로그인, 로그아웃,
                회원가입 기능 구현
              </li>
              <li>GraphQL을 이용한 데이터 관리</li>
              <li>React기반 컴포넌트 계층 구조 디자인</li>
            </ul>
          </Project>
        </Row>
        <Project
          description={
            <p>
              2021 우리은행 온(On)택트 해커톤 본선대회에 참여하여 개발한
              프로젝트입니다. 복잡해진 은행 앱의 사용 편의성을 위하여 채팅을
              통한 송금 기능을 가진{' '}
              <OutLink
                label="어플리케이션"
                link="https://github.com/Julrum/OnelineBank/releases/tag/v1.0"
              />
              을 개발하였습니다. 대회에는 팀원과 같이 나갔으나 개발은 혼자
              진행하였습니다. 해커톤 예선에서는 통과하였으나 본선에서는 우리
              은행 앱 내에 비슷한 서비스가 있다는 이유로 입상은 하지
              못하였습니다.
            </p>
          }
          githubLink="https://github.com/Julrum/OnelineBank"
          other
          skill="Javascript, React Native, Firebase, Expo"
          dateFrom="2021-04"
          dateTo="2021-06"
          title="한줄 은행"
        >
          <ul>
            <li>프론트엔드 기술환경 구성 및 모든 기능 구현</li>
            <li>Firebase를 사용한 스토어 디자인</li>
            <li>우리 은행 API를 사용한 송금 기능 구현</li>
            <li>생체인증을 이용한 사용자 확인 기능 구현</li>
          </ul>
        </Project>
        <Project
          description={
            <p>
              Next.Js를 이용하여{' '}
              <OutLink label="블로그" link="https://julrum.github.io" />를
              제작하는 개인 프로젝트 입니다. 처음엔 React로 개발하였으나 Post
              페이지 구현을 위해 Next.Js로 변경하였습니다.
            </p>
          }
          githubLink="https://github.com/Julrum/julrum.github.io"
          other
          skill="Typescript, Next.Js, styled-components, MDX"
          dateFrom="2021-02"
          title="개인 블로그"
        >
          <ul>
            <li>프론트엔드 기술환경 구성 및 모든 기능 구현</li>
            <li>Atomic 디자인</li>
            <li>웹브라우저의 테마에 따른 테마 변경 기능</li>
            <li>다양한 브라우저 환경 및 사이즈 대응</li>
          </ul>
        </Project>

        <h2>Certificates</h2>
        <ul>
          <li>
            <OutLink
              label="AWS training and certification"
              link="https://drive.google.com/file/d/1LzNVPiGx2hFrqHJdnqedG1TrOatShHK-/view?usp=sharing"
            />
          </li>
          <li>
            <OutLink
              label="TOPCIT"
              link="https://drive.google.com/file/d/1Pl_UzJ8mkrCNYbl3HPsu9gbzctfQlPK1/view?usp=sharing"
            />
          </li>
          <li>
            <OutLink
              label="리눅스 마스터 2급"
              link="https://drive.google.com/file/d/1vzBdsUZke4CE7rVAzCgNvlEOEmpQWgm7/view?usp=sharing"
            />
          </li>
        </ul>

        <h2>SKILLS</h2>
        <SideListLayout>
          <SideList
            title="Front-End"
            list={[
              'React',
              'Next.js',
              'JavaScript',
              'TypeScript',
              'HTML5',
              'CSS',
            ]}
          />
          <SideList
            title="Back-End"
            list={['Firebase', 'GCP', 'AWS', 'GraphQL', 'Java', 'Python']}
          />
          <SideList title="Application" list={['React Native']} />
          <SideList
            title="etc"
            list={[
              'Ubuntu',
              'Git/Github/Gitlab',
              'Confluence',
              'JIRA',
              'Figma',
            ]}
          />
        </SideListLayout>
      </AboutContentLayout>
    </article>
  </Layout>
);

export default About;
