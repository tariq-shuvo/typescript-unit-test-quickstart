class ManageDOM {
    /**
     * insertNewElementAppendById
     */
    public insertNewElementAppendById(id: string, element: any) {
        let node = document.getElementById(id)!
        node.insertAdjacentHTML("afterend", element);
    }

    /**
     * insertNewElementPrependById
     */
    public insertNewElementPrependById(id: string, element: any) {
        let node = document.getElementById(id)!
        node.insertAdjacentHTML("beforebegin", element); 
    }

    /**
     * insertNewElementById
     */
    public insertNewElementById(id: string, element: any) {
        let node = document.getElementById(id)!
        node.innerHTML = element
    }

    /**
     * insertNewElementByClassName
     */
     public insertNewElementByClassName(className: string, element: any) {
        let nodes = document.getElementsByClassName(className)!

        console.log(nodes)
    }
}

export default ManageDOM