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

    /**
     * classAddToElement
     */
    public classAddToElement(id: string, className: string) {
        var element = document.getElementById(id)!
        element.classList.add(className);
    }

    /**
     * classAddToElement
     */
     public classRemoveFromElement(id: string, className: string) {
        var element = document.getElementById(id)!
        element.classList.remove(className);
    }
}

export default ManageDOM