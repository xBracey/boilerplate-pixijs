import { Container, Stage } from '@pixi/react';
import { useState } from 'react';
import Bunny from 'src/components/Bunny';
import ControllableBunny from 'src/components/ControllableBunny';
import PageLayout from 'src/layouts/PageLayout';

const Index = () => {
    const [speed, setSpeed] = useState('0.05');

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSpeed(e.target.value);
    };

    return (
        <PageLayout>
            <div style={{ width: '800px', height: '600px' }} className="relative">
                <div className="absolute top-0 bottom-0 right-0 left-0 z-50">
                    <input
                        type="text"
                        onChange={onTextChange}
                        value={speed.toString()}
                        className="p-2 m-2 border-black border text-black"
                    />
                </div>

                <Stage width={800} height={600}>
                    <Container x={400} y={330}>
                        <Bunny speed={speed !== '' ? parseFloat(speed) ?? 0 : 0} />
                        <ControllableBunny />
                    </Container>
                </Stage>
            </div>
        </PageLayout>
    );
};

export default Index;
