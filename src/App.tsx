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
        <Text className='Result-text'  whiteSpace={"break-spaces"} variant="body-3">В тестовом задании был сделан прототип приложения в котором реализован вывод таблицы заявками, ее редактирование, удаление , создание новых и поиск по ФИО </Text>
        <br />
        <Text className='Result-text'  whiteSpace={"break-spaces"} variant="body-3">Прототип был написан на React с использованием Redux</Text>
        <br />
        <Text className='Result-text' variant="body-3">Документация к Api и описание проекта в <a href="https://github.com/iliabes/testTaskCrab">githab</a></Text>
        <br />
        <Text className='Result-text' variant="body-3">Также была реализованна возможность скрытия завершенных заявок и небольшая адаптация под мобильные устройства </Text>
        <br />
        <Text  className='Result-text' variant="body-3">Еще хочу поблагодарить вас за то что узнал что есть такая крутая штука как Gravity UI </Text>
      </div>
    </div>
    </section>
    </>
  )
}

export default App

