import React from "react";
import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const { Content } = Layout;


export const App = () => {

    return (
        <Layout className='content'>
            <Content className='lessons'>
                <div class="d-flex justify-content-center flex-wrap" style={{ borderBottom: '2px solid black' }}>
                    <div class="p-2 bd-highlight" style={{ fontSize: 48, color: 'black' }}>Мої уроки</div>
                </div>
                <br />
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://drive.google.com/file/d/1zQGXufwKs56nQBA767ZPmUZ1xpOweNhT/view?usp=sharing" class="btn btn-outline-primary btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Урок геометрії у 7 класі: "Суміжні кути"</a>
                </div>
                <br />
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://drive.google.com/file/d/1ELiGsuXcbIyjBAOQiugnkoe2V5YA6c11/view?usp=sharing" class="btn btn-outline-primary btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Урок алгебри у 9 класі: "Перетворення графіків функції"</a>
                </div>
                <br />
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://drive.google.com/file/d/10yOG9K8OLmNnqXT_LjrLfiSkSeeDKRxX/view?usp=sharing" class="btn btn-outline-primary btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Родинне свято</a>
                </div>
                <br />
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://drive.google.com/file/d/10xCNGSpvzOEKk70evd8_LgOsLcp54Kk-/view?usp=sharing" class="btn btn-outline-primary btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>«Міс Математика» та «Містер Математика»</a>
                </div>

                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipMZFciv9JyZV6oS-Z3PfF-mECg5IzYduNxVOvVX2ugi-qRWNYNW7XN8YFjjXE-ynA?key=MjFfU01PRTZFOEhGM296aUVwM29BQUZTYUx6U1Rn" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 6 клас</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipPDZgoESEWilA43DCmbF47OR2BQMxpE5BXls323G_hfn_t-e_okPjsxGOxW3oAo9g?key=bmxOSnJLMk9TTElvRW9MQXhyb0JQQ2NhMzRpQ3BB" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 6 клас ч.2</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipMi3kIqugN_tBBQIbiAIfUA-O-SE_Dk7d_P-a6a2s2mixcHWGEXqIhrgYWbr_ofCg?key=NlRmTlQ1elVkNUVBUnRkWkhVSTg2Q09yTWRqRFln" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 5 клас</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipOzDq3NbKU2HUu4_A-QMDq_PKbXuz8MgIsEaTm6CULDwRBNrS_ki-8lpQ6Kqnl8dQ?key=N1NxZHpRbzdidkNZaEUzazBneVNvWk5SSHNiR05n" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 7 клас Геометрія</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipNQWVIBiuP8aDk1q7LsjLI2EKexlm2yheYgSfcZKN5vVKId478zdsjeq7X8mtLIKA?key=WnlEaUFNbW5uSnhlV0ZjLThXNDNzQlA3bDdWS0FR" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 7 клас Алгебра</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipNr_Ui852iq1LPZzAqURjK4n3EBP4F_726lqRZB8ZxPtNiXwPj0ak1nhdqnliYLWA?key=R09QUGNadzk2NXQwb2xJcjNUNFE0c20zbWpTcnF3" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 7 клас Алгебра ч.2</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipNqDJtxVN0IpK6iX1v5tJfOyBHOuyuVbL4vxhUc_5YxSan18cRY5Y85aJ0XOXZw9w?key=bXZ0QXVTR3BpTy1GTTZjYXl6V1VfV0NxNzloajhB" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 8 клас Геометрія</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipMIY7oKEph6HtLvR55QWz_KyxUncWEb6R8wWYJhusvZQtRxhJOlsFt9_D6goXEJiA?key=MUV6S1VKSjA0Q1c3aTRLT051V2hKMk91SjRUbmxR" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 8 клас Алгебра</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipOeMvnwPiBnpJjqDiEtL5UX39xOSkqeBgQqiYYEATNUnEoaCcKMtzMTWRSMIrNUYg?key=Uk5WYnFRZldjbE5FTWUxQXJBTlVRZmNBT2FOSUVR" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 8 клас Алгебра</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipMh5YBbcU3vo_2HhFeG-qLJSO_Dp85Vx_Ycv9sTTcO5AkbehxrcdpbStggc8rireA?key=N2FVcV8wM0FOblR2N2JnbDB5emFwYnBaaXpYYi1n" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 10 клас Алгебра</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipNH_5m2EZXrMlJx_kQtWKmoKSOFH42ubwhcaeP7Js4ZeVdksoCDyg6XuYbr6Ptsaw?key=SVJmekVpUjEtTmFIbGVwdTQ4Nm1yU0pYUTBMTFBn" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 10 клас Алгебра ч.2</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipP76wRuaN99jaPQFzj05861MeZJG3GJKwjlXtCEpA9TyWaEX5FDfjZNgPAHEXHNeg?key=bE16aTVqY2tjY2FPdUs4b2ZIYmJwMWpNeTFrOTVB" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 10 клас Алгебра ч.3</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipMOWjlYCEZQTGL5vl1J3_Bie-F1hJPrqDnHN_22R-PWYQ8m_YuTonu_Cha-_o2LZQ?key=WU1JZ1NKaV8xOFoyaWQwRlIzZzdsaUJuUHRjNDFn" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 9 клас Алгебра</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipMsrljq0IKqWVD0h6oCL74xoZRW49ueoefe0lX2WCxOcJtaOxOTkT8ZBJ9Nt2ajOA?key=NHdObVpYYkxDQVZlWW1vaUoteVBqWHNORV9UdXdB" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 8 клас Алгебра</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipNCSDP80XjDibLi0XkJGHy2XwH9qToWKO1dmmO6xqPkIGQtIaE6jrsGklXfkJxrQg?key=THFVcEpNbXNySkZCalA4elhJLVhiTzQtQWFCcE5B" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 8 клас Геометрія</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipM0yp_98WiZLqzLCmz4GojMXr4laQtaqEFJRBSUWbotm0r8y42WxjllgN65JgQZGg?key=emU0MXEwYkxMYUtBUmI4VmUyZDRPaUdRcDNZSWV3" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 9 клас Алгебра</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipNckkfH80z5aSEqxtRW7s6wFEv2tUhKCZbsDUKLdtvTGtV9Pm9CnlEC8rwDqg9Jzg?key=S3Vxam5SRXF0aFN3eVBFb0NhVWRYbmJCUHZRM1h3" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 9 клас Геометрія</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipNBoC56w8HT0cKMM9G6xANupHNQrccc1eA_t0BwKGZNRI_dup9DYeDi8wqN92DQlw?key=M21TU0FKSmd0WWNBTjZqTWRLbmlacG40Mm5qbjVB" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 10 клас Алгебра</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipPzCsbJqfLeOucC2R58gTQO3Z4ybd7_23PXkT8K0t8-nG1SuK3FAIm3YP3dK20JJQ?key=MEhSdTRfbVhtem5xbm8yTXJIRnJ1YXl1LXRLaVd3" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 10 клас Геометрія</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipPZ2_N2PGU2HtEsoacFZuIDb3aeaNm67KKNGvosaQuQ-dSQugiSm1kFGSTFPT9QQw?key=UDN5TUs2MjZTSF80WmlUYmxQaGY0R1daWDdPQ2d3" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 5 клас</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipNpGHWb4cJaBmD0lYloVAw7YwZzsGxQZDpE5mklsklQzokKZcsGjI8i6hc4opUdpw?key=a1VmYldldHNzdTJVbXFKekdVeklnX1BMUWdWeDh3" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 6 клас</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipN05FzLt1GS7hlsWkYhjESB8JX2gD3v85yD4FLkWvJDS_w7HT69ZbTc0nuIyVYTAw?key=WktIeTRLWHZHNlpWRGlGdkNESUJsZk45cVZWT2Nn" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 8 клас Алгебра</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipPZwxOjwyUQ5fAxYq6HtzKFP3fmFlrxEkMu9p6ZeLoht3BFEpkHW-K-iXUq2wJ6Dg?key=cVQtTjh1WjUzVDRHbzNFN0xLaGR2UE45Q0lOdDlB" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 8 клас Геометрія</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipO2nq9nRB2yEDoaboAs8_B_gMqrvnaqxRjrXZIO3Zsnv8LeofkG1rA3rVfuuOn3Eg?key=WFlpeDhhZWdlc1NNWkw3U0JseFZuYl9OaGpva3JB" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 9 клас Геометрія</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipMTNFJqeVLqYgzms9AkpceXODj6Vozc2OYwDJSsa8UZCjiKRCmaB6IFn3X2PcpncQ?key=YjlNQ3BMS0UtajBSdzkySWJpaUphcU8wdktQUkxn" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 10 клас Алгебра</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipMeqSV8WMLe12vLGMlCi-g0SsRTxsayF7f4iqy3vm_a2nNLk0qENn3BztQm_k4cGg?key=Vkl3WUY0azRtM09iajRzZkdKM0RFVUV0SjhMXzJn" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 10 клас Геометрія</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipPItl2n73A4JcJlvlFAaMwniX5e8tovpCijUMpM1BxtUH8D1-OH7Wl35HLX3Py1dg?key=YjJreTJiYmlMYlMwU3lrUldiNlRVTDRRUkk1aUZB" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 11 клас Алгебра</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipNe5xOdo7UNnGfhh-8IMV1WD2TtTa9aDsmZzK4U72CTaPSkrtKEYWODgx-g19TP0w?key=MmxidDlrTkllQmNZUG5tS2tlVG1SenpsODdKRktn" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 9 клас Алгебра</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipOPiMLwLJg5LR2wGpHsHlwgodu75AfxP6bvCbBzLpOUXK0E-aKBXD5rUfzN9ga3mA?key=dFV2UWJldGNidWJfcDBKQXk4amJ0aUhENEZtUTNR" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 5 клас</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipORBJbI6SYzMFqjChLFuKWRfvwytEHVQXEAzdPbry_AkSgwcpvdWuBd14JH7BEPKA?key=UEdHS0tMc0JfMlZKS1l5U1J0SmJPSjdqcG9RUEFn" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 7 клас Геометрія</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipOSn6vVVWRsYx08tZSgffYPsIu9rpic6lgs88qQa6JHjySkZ2pDMaYFglrGZPTWmw?key=b0tXbzN2WjBRMVRsYm94QnFxaE5uRVpDVUpNbFVR" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 9 клас Алгебра</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipO3Q4moxlh-FmplzpvlUGR9fDF8hKPASSgb1kxcrEsugIUGvn4z1nQNKQWJ_Z4UKQ?key=M1l6TG5rakdteXEydHlmUGNMakFBQ0YwUUF6MmVB" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 9 клас Геометрія</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipNn3Ms_gzZB61HTHEbUFAhAI1Xb5yn3oeHz-o_1iTgh5YORpD96XF2F7cHm48Z-kA?key=ZEFBdTUtQ3NlMm9WVnRTMkdKY241T3JRVVdLbnl3" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 10 клас Алгебра</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipNGnYaHWAfYtJdz_rN9gI-SAPP3hNmiEeqEJsiUaQ3gontIKgiAeUqG-Tpi7GfERQ?key=QWhHTktnTndyNEtCeUw0VDlYWEdXZXVnWEtodS1R" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 11 клас Алгебра</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipOC8ryCKENm3uZl3hXiK1BMtGVEghnkbaQKpJUwAEharEnqI7jQRPWXJypsED5OCg?key=V2ZocFRuU2oyUmFkMERKQUVBb2JwQ2std013bTNR" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 5 клас</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipPOdU9rqtkUlDtbpPhzm0ANi6-lFaj8n3js01Uld7aGmMDqC_exxI_NIxAZFWrilQ?key=alhZanNkeDkyUWVCZ09FOVR4YTBkWU42RDZUREN3" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 6 клас</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipNEsOe6rPLIOU_fQJQuyf9nYj1xbC_Mvcq4ruuVO073R5SwHGLC5wLx6d4Dw8k4gA?key=VktSNjRLVmw4UlFZWGZsWlVYQmRXOVYtaTJfeTN3" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 7 клас Алгебра</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipOakYvE3KonlnPcMwD9XWVd5ek4z-RJ44aM6ob74gUJvOr2Qpj3ni3XZnLyXg7u7w?key=WEt0Y2l4YzAyTkF6dE9ack83aEdOQS15NDdBNFZR" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 8 клас Алгебра</a>
                </div>
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://photos.google.com/share/AF1QipPn4Xo90CGlDSRyEhU35vUwAtZXNsoOvjZ2bDOFVU5HrioHl3QmkKtCgu2A3f80Rg?key=bGNSMUZPcjFHWWx6UkhpRjEtTnl1bnZ5d3ZWMW13" class="btn btn-light btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Відеоурок 9 клас Алгебра</a>
                </div>




            </Content>
        </Layout>
    );
};

export default App;