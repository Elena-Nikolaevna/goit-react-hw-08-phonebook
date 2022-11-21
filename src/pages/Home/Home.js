import { Image } from '@chakra-ui/react';
import image from './img/phonebook.png';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  hello: {
    marginBottom: 100,
    fontWeight: 700,
    fontSize: 80,
  },
  text: {    
    fontWeight: 400,
    fontSize: 48,
  }
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <div style={styles.hello}>Hello!</div>
        <div style={styles.text}>I am your personal phone book! </div>
      </h1>
      <Image src={image} alt="img" objectFit="cover" width="450px" />
    </div>
  );
}
