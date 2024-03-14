import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_DEALS, DB_ID } from "~/app.constants";
import type { IDeal } from "~/types/deals.types";
import { KANBAN_DATA } from "./kanban.data";
import type { IColumn } from "./kanban.types";

export function useKanbanQuery() {
  return useQuery({
    queryKey: ["deals"],
    queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
    select(data) {
      const newBoard: IColumn[] = [...KANBAN_DATA];
      const deals = data.documents as unknown as IDeal[];
      console.log(deals, newBoard);
    },
  });
}
