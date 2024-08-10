import styles from '@/app/breed/all/page.module.css';
import { fetchBreads } from '@/app/lib/data';
import CardsAgregator from '@/app/ui/cardsAgregator';

export default async function Page() {
  const result = await fetchBreads('cat');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <CardsAgregator data={result} />
      </div>
    </div>
  );
}
