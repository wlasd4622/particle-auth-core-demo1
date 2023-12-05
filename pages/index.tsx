import { useConnect, useEthereum } from '@particle-network/auth-core-modal';
import styles from '../styles/Home.module.css';

export default function Home() {
    const { connect, connected, disconnect } = useConnect();
    const { address, chainInfo, switchChain, provider } = useEthereum();

    return (
        <div className={styles.container}>
            {connected ? (
                <div>
                    <div>{address}</div>
                    <div>
                        <button
                            onClick={() => {
                                disconnect();
                            }}
                        >
                            Disconnect
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    className="login-button"
                    onClick={() => {
                        connect()
                            .then(() => {
                                console.log('connect success');
                            })
                            .catch((error: Error) => {
                                console.log('connect error', error);
                            });
                    }}
                >
                    Connect
                </button>
            )}
        </div>
    );
}
