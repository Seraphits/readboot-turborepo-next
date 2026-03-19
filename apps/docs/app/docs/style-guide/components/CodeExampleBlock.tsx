import styles from './CodeExampleBlock.module.scss';

interface CodeExampleBlockProps {
  code: string;
}

export function CodeExampleBlock({ code }: CodeExampleBlockProps) {
  return (
    <pre className={styles.codeBlock}>
      <code>{code}</code>
    </pre>
  );
}
