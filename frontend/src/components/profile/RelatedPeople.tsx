import { RelatedPerson } from "@/types";
import { ListCard } from "@/components/ui/list-card";
import { PersonListItem } from "@/components/ui/person-list-item";

interface RelatedPeopleProps {
  people: RelatedPerson[];
}

export function RelatedPeople({ people }: RelatedPeopleProps) {
  return (
    <ListCard
      title="関連する人物"
      icon="share"
      items={people}
      emptyMessage="関連する人物はいません"
      fullHeight={true}
      renderItem={(person) => (
        <PersonListItem
          key={(person as RelatedPerson).id}
          id={(person as RelatedPerson).id}
          name={(person as RelatedPerson).name}
          subtitle={(person as RelatedPerson).company}
        />
      )}
    />
  );
}
