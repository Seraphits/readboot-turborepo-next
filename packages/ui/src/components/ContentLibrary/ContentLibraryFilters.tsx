import type {
  LibraryFilterOption,
  LibraryFilters,
} from "@repo/wp-utils";
import Link from "next/link";
import styles from "./ContentLibrary.module.scss";

export interface ContentLibraryFiltersProps {
  action: string;
  activeFilters: LibraryFilters;
  articleTypes: LibraryFilterOption[];
  theories: LibraryFilterOption[];
  submitLabel?: string;
  resetHref?: string;
}

function renderOptions(
  name: "type" | "theory",
  options: LibraryFilterOption[],
  activeValues: string[],
) {
  return (
    <div className={styles.filterOptions}>
      {options.map((option) => {
        const id = `${name}-${option.value}`;
        return (
          <label key={option.value} htmlFor={id} className={styles.filterOption}>
            <input
              id={id}
              type="checkbox"
              name={name}
              value={option.value}
              defaultChecked={activeValues.includes(option.value)}
            />
            <span>
              {option.label} ({option.count})
            </span>
          </label>
        );
      })}
    </div>
  );
}

export function ContentLibraryFilters({
  action,
  activeFilters,
  articleTypes,
  theories,
  submitLabel = "Apply filters",
  resetHref,
}: ContentLibraryFiltersProps) {
  return (
    <form action={action} method="get" className={styles.filterForm}>
      <fieldset className={styles.filterFieldset}>
        <legend className={styles.filterLegend}>Article types</legend>
        {renderOptions("type", articleTypes, activeFilters.types)}
      </fieldset>

      <fieldset className={styles.filterFieldset}>
        <legend className={styles.filterLegend}>Theories</legend>
        {renderOptions("theory", theories, activeFilters.theories)}
      </fieldset>

      <div className={styles.filterActions}>
        <button type="submit">{submitLabel}</button>
        {resetHref ? <Link href={resetHref}>Reset</Link> : null}
      </div>
    </form>
  );
}
