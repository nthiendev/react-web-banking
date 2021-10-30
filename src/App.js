import Header from './component/Header'
import styled from 'styled-components'
import {OuterLayout} from './styles/Layouts'
import CardSection from './component/CardSection'
import ChartSection from './component/ChartSection'
import MessagingSection from './component/MessagingSection'
import PaymentSection from './component/PaymentSection'
import FAQSection from './component/FAQSection'
import Footer from './component/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <CardSection />
          <ChartSection />
          <MessagingSection />
          <PaymentSection />
          <FAQSection />
        </MainStyled>
      </OuterLayout>
      <Footer />
    </div>
  );
}

const MainStyled = styled.main`

`

export default App;
