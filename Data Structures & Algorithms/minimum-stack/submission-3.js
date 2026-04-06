class MinStack {
    constructor() {
        this.stack = []
        this.min = 1000
    }
    
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(!this.stack.length){
            this.stack.push(val)
            this.min = val
        }else{
            if(val > this.min){
                this.stack.push(val)
            } else{
                this.stack.push(2*val - this.min)
                this.min = val
            }
            
        }
        
    }

    /**
     * @return {void}
     */
    pop() {
        if (!this.stack.length) return
        let popValue = this.stack.pop()
        if(popValue < this.min){
            this.min = 2* this.min - popValue
        }
        
    }

    /**
     * @return {number}
     */
    top() {
        if (!this.stack.length) return
        return this.stack[this.stack.length -1] < this.min ? this.min: this.stack[this.stack.length -1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
