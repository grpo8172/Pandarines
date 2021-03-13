import React, { useState } from 'react';
import { Affix, Button } from 'antd';

export const ContactButton = () => {
    const [container, setContainer] = useState(null);
    return (
        <div className="scrollable-container" ref={setContainer}>
            <div className="background">
                <Affix style={{ position: 'absolute' }} target={() => container}>
                    <Button type="primary">Fixed at the top of container</Button>
                </Affix>
            </div>
        </div>
    )
}

export default ContactButton;