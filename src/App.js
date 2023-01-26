import BottomContent from "Components/BottomContent/BottomContent";
import Goods from "Components/Goods/Goods";
import Header from "Components/Header/Header";
import Main from "Components/Main/Main";
import Navigation from "Components/Navigation/Navigation";

const App = () => {
  return <div className="wrapper">
    <Header />
    <Navigation />
    <Main />
    <Goods />
    <BottomContent />
  </div>
}

export default App;