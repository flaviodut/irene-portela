import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    // <main className={styles.main}>
    // <Image
    //   src="/vercel.svg"
    //   alt="Vercel Logo"
    //   className={styles.vercelLogo}
    //   width={100}
    //   height={24}
    //   priority
    // />
    <main>
      <div className="container">
        <button className='btn btn-primary m-2'>Button</button>
        <button className='btn btn-secondary m-2'>Button</button>
        <button className='btn btn-danger m-2'>Button</button>
      </div>
    </main>
  );
}
