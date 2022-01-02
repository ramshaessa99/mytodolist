function Filters({handleSelectioSortOption}) {
    return (
        <>

        <button onClick={() => handleSelectSortOption("completed")}>
        Sort on basis of when the task was completed
        </button>
        <button onClick={() => handleSelectSortOption("creationDate")}>
        Sort on the basis of creation date
        </button>
        <button onClick={() => handleSelectSortOption("dueDate")}>
        Sort on the basis of due date
        </button>
        </>
    );
}

export default Filters;