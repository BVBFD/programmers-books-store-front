import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import Tittle from "../components/common/Tittle";

const Home = () => {
  return (
    <>
      <Tittle size="medium" color="background">
        제목테스트
      </Tittle>
      <Button size="large" schema="primary">
        버튼테스트
      </Button>
      <InputText placeholder="여기에 입력하세요" />
      <div>home body</div>
    </>
  );
};

export default Home;
