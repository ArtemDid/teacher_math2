import React, { useState } from "react";
import { Layout, Menu } from 'antd';
import { Card } from 'antd';
import { Radio } from 'antd';
import Swal from 'sweetalert2'
import { Button } from 'antd';
const { SubMenu } = Menu;
const { Content } = Layout;


export const App = () => {

  const [testArray, setTestArray] = useState(
    [
      {
        title: 'Яке з наведених рівнянь не має коренів?', answ1: 'x-2=x+2', answ2: 'x-2=x-2', answ3: '2-x=x-2', answ4: '2-x=x+2', valTrue: '1',
        color: ['black', 'black', 'black', 'black'], color2: ['black', 'black', 'black', 'black'], result: false
      },
      {
        title: "Розв'яжіть рівняння 7x+5=5x-3", answ1: '-6', answ2: '-4', answ3: '4', answ4: '6', valTrue: '2',
        color: ['black', 'black', 'black', 'black'], color2: ['black', 'black', 'black', 'black'], result: false
      },
      {
        title: "Яке з наведених рівнянь рівносильне рівнянню 4x-2=6?", answ1: '4x=6/2', answ2: '4x=6-2', answ3: '4x=6+2', answ4: '4x=6*2', valTrue: '3',
        color: ['black', 'black', 'black', 'black'], color2: ['black', 'black', 'black', 'black'], result: false
      },
      {
        title: "Розв'яжіть рівняння 3(x-1)+7(x+2)=10", answ1: '0', answ2: 'коренів немає', answ3: '0.1', answ4: '-0.1', valTrue: '4',
        color: ['black', 'black', 'black', 'black'], color2: ['black', 'black', 'black', 'black'], result: false
      },
      {
        title: "Розв'яжіть рівняння |x-4|=x+3", answ1: '0.5', answ2: '-0.5', answ3: 'коренів немає', answ4: '0.5 і -0.5', valTrue: '1',
        color: ['black', 'black', 'black', 'black'], color2: ['black', 'black', 'black', 'black'], result: false
      },


    ]
  )

  const [titleButton, setTitleButton] = useState('Результат')


  function onChange(e, index) {
    console.log(`radio checked:${e.target.value}`, index);

    if (e.target.value === testArray[index].valTrue) {
      setTestArray(() => {
        testArray[index].result = true;
        testArray[index].color2[e.target.value-1] = 'green';

        return testArray;
      })
    }
    else {
      setTestArray(() => {
        testArray[index].result = false;
        testArray[index].color2[e.target.value-1] = 'red';

        return testArray;
      })
    }

    console.log(testArray)


  }

  function onClick(e) {
    if (titleButton === 'Результат') {
      setTitleButton('Пройти заново')

      let count = 0;

      for (let index in testArray) {
        setTestArray(() => {
          testArray[index].color = testArray[index].color2;
  
          return testArray;
        })
  
        if (testArray[index].result) {
          count++;
        }
      }

      console.log(testArray)


      if (count === testArray.length) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: `Ви вгадали ${count}/${testArray.length}`,
          showConfirmButton: false,
          timer: 1500,
          width: 300
        })
      }
      else {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: 'Неправильно',
          showConfirmButton: false,
          timer: 1500,
          width: 300
        })
      }

    }
    else {
      setTitleButton('Результат')
      for (let index in testArray) {
        setTestArray(() => {
          testArray[index].color = ['black', 'black', 'black', 'black'];
          testArray[index].color2 = ['black', 'black', 'black', 'black'];

          return testArray;
        })
        }
  
    }



  }

  return (
    <Layout className='content'>
      <Content className='test'>
        <div class="d-flex justify-content-center flex-wrap" style={{ borderBottom: '2px solid coral' }}>
          <div class="p-2 bd-highlight" style={{ fontSize: 48, color: 'coral' }}>Тест з алгебри 7 клас з теми: "Лінійні рівняння з однією змінною"</div>
        </div>
        <br />
        <div class="d-flex justify-content-center flex-wrap">
          {testArray.map((item, index) => (
            <Card title={item.title} bordered={true} style={{ width: 300, boxShadow: '0px 15px 32px rgb(12 13 30)', margin: '20px' }} key={index}>
              <Radio.Group onChange={(e) => onChange(e, index)} >
                <div class="d-flex align-items-center flex-column justify-content-center" style={{ width: 252 }}>
                  <div class="p-2 bd-highlight">
                    <Radio.Button value="1" style={{ width: 200, textAlign: "center", color:item.color[0] }}>{item.answ1}</Radio.Button>
                  </div>
                  <div class="p-2 bd-highlight">
                    <Radio.Button value="2" style={{ width: 200, textAlign: "center", color:item.color[1] }}>{item.answ2}</Radio.Button>
                  </div>
                  <div class="p-2 bd-highlight">
                    <Radio.Button value="3" style={{ width: 200, textAlign: "center", color:item.color[2] }}>{item.answ3}</Radio.Button>
                  </div>
                  <div class="p-2 bd-highlight">
                    <Radio.Button value="4" style={{ width: 200, textAlign: "center", color:item.color[3] }}>{item.answ4}</Radio.Button>
                  </div>
                </div>
              </Radio.Group>
            </Card>

          ))}

        </div>
        <div class="d-flex justify-content-center flex-wrap">
          <Button danger type="text" style={{ fontSize: '24px', fontWeight: 'bold' }} onClick={onClick}>{titleButton}</Button>
        </div>


      </Content>
    </Layout>
  );
};

export default App;