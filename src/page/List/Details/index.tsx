import {useEffect, useState} from 'react';
import {SwaggerUIBundle} from 'swagger-ui-dist';
import 'swagger-ui-dist/swagger-ui.css';
import Nav from '@/components/Nav';

export default function Apply() {

    useEffect(() => {
        SwaggerUIBundle({
            url: `https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json`,
            dom_id: '#swagger-ui',
        });
    }, []);

    return (
        <div>
            <div id="header-wrapper">
                <div className="5grid-layout">
                    <div className="row">
                        <div className="12u">
                            <section id="header">
                                <Nav path='/apply'/>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main-wrapper">
                <div className="5grid-layout">
                    <div className="row">
                        <div style={{padding: 24}}>
                            <div id="swagger-ui"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
