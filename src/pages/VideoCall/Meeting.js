import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const API_URL = 'https://magenta-spider-cape.cyclic.app';

function Meeting() {

    const { id } = useParams();

    useEffect(() => {
        const domain = 'https://adamamata.daily.co/'

        axios.get(`${API_URL}/meeting/${id}`)
            .then((res) => {
                if (res.status === 200){
                    const script = document.createElement("script");
                    script.innerHTML =  `window.DailyIframe.createFrame({
                        iframeStyle: {
                            position: 'relative',
                            width: '100vw',
                            height: '100vh',
                            border: '0',
                            zIndex: 9999
                        },
                        showLeaveButton: true,
                    })
                        .join({
                            url: '${domain}${id}',
                        });`;

                        document.body.appendChild(script);
                }
            })
            .catch(err => console.log(err));
    }, [id]);

  return (
    <div></div>
  )
}

export default Meeting;