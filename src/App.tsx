import {Text} from '@gravity-ui/uikit';

import Nav from './components/nav/Nav';


function App() {


  return (
    <>
    <section className="home">
    <Nav/>
    <div className="home-container">
      <div className="Result">
        <h1>Тестовое задание </h1>
        <Text className='Result-text'  whiteSpace={"break-spaces"} variant="body-3">В тестовом задании был сделан прототип приложения в котором реалтзован выаод таблицыс заявками, ее редактирование , удаление и создание новых</Text>
        <br />
        <Text className='Result-text'  whiteSpace={"break-spaces"} variant="body-3">Прототип был написан на React с использованием Redux</Text>
        <br />
        <Text className='Result-text' variant="body-3">Также было сделанна возможность скрытия завершенных заявок и небольшая даптиция под мобильные устройства  </Text>
        <br />
        <Text className='Result-text'  variant="body-3">К сожалению не успел сделать поиск и фильтрацию по заявкам</Text>
        <br />
        <Text  className='Result-text' variant="body-3">Еще хочу поблагодарить вас за то что узнад что есть такая крутая штука как Gravity UI </Text>
      </div>
    </div>
    </section>
    </>
  )
}

export default App

