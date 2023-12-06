import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by visiting &nbsp;
          <code className={styles.code}>Workwise</code>
        </p>
        <div>
          <p>
            By <h1>HONGOA</h1>
          </p>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/workwisepicha.png"
          alt="Next.js Logo"
          width={180}
          height={57}
          priority
        />
        <Image
          className={styles.logo}
          src="/internal.jpg"
          alt="Next.js Logo"
          width={250}
          height={87}
          priority
        />
        <Image
          className={styles.logo}
          src="/checklist.png"
          alt="Next.js Logo"
          width={250}
          height={87}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/HOMEPAGE.pdf"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Audit Checklist <span>-&gt;</span>
          </h2>
          <p>
            Explore the comprehensive checklist to review what has been audited
            in-depth.
          </p>
        </a>

        <a
          href="https://workwise.africa/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Visit Workwise <span>-&gt;</span>
          </h2>
          <p>
            Discover the audited platform and take advantage of a free trial to
            explore its&nbsp;features!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Audit Reports <span>-&gt;</span>
          </h2>
          <p>Review the audit reports for the modules of the platform.</p>
        </a>

        <a
          href="https://hongoa-portfolio.vercel.app/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Are you interested in having your web platform audited?{" "}
            <span>-&gt;</span>
          </h2>
          <p>Feel free to contact me through my portfolio.</p>
        </a>
      </div>
    </main>
  );
}
