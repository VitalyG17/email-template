import { Bold, Eraser, Italic, Underline } from 'lucide-react';
import styles from './EmailTemplate.module.scss';

export function EmailTemplate() {
  return (
    <>
      <div>
        <h1>Email editor</h1>
        <div className={styles.card}>
          <div className={styles.editor}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            ipsum, nisi delectus rem, quae doloribus totam deserunt omnis vel
            harum facilis odio alias ut possimus suscipit esse unde dolor.
            Voluptate.
          </div>

          <div className={styles.actions}>
            <div className={styles.tools}>
              <button>
                <Eraser size={17} />
              </button>
              <button>
                <Bold size={17} />
              </button>
              <button>
                <Italic size={17} />
              </button>
              <button>
                <Underline size={17} />
              </button>
            </div>
            <button>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}
