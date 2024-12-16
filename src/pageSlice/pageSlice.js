import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
const pageStore = (set) => ({
    // i created a pages array which i want to pass
    pages:["home","about","our-team","investment-approach","contact"],
    // set the initial currentPath to / - which is home
    currentPage:"home",
    // set the current path and return it.
    setCurrentPage: (page) => {
        set(() => ({
            currentPage: page,
        }))
    },
})
// here i created a store key to use the pageStore to all the pages.
const usePageStore = create(
    devtools(
        persist(pageStore, {
            name:"pageStore"
        })
        )
    )
// export the pageStore by using "use" to before the name, so it should represented as a Hook.
export default usePageStore;