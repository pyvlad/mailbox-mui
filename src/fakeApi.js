/* 
Class to incapsulate all network code.
Asynchronous data source for app components.

Uses class properties stage 3 proposal 
(need @babel/plugin-proposal-class-properties for this to work).
*/
import mockData from './data'


class ApiService {
  // class properties syntax
  categories = mockData.categories // categories aren't supposed to change
  messages = mockData.messages     // imitate DB store

  getResponsePromise = (result) => {
    return new Promise(
      function(resolve, reject) {
        setTimeout(() => resolve(result), 1000 * Math.random())
      }
    )
  }

  /* method to consume JSON resources (don't need this in fake API) */
  async getResource(url) {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`fetch failed for ${url} (status: ${response.status})`)
    }
    return await response.json()
  }
  
  // FAKE BACKEND API
  getMessagesByCategoryId = (categoryId) => {
    console.log("getting messages by category Id", categoryId)
    let msgList = this.messages
    if (categoryId !== "all") {
      msgList = this.messages.filter(msg => msg.categoryId === categoryId)
    }
    msgList.sort(function(a, b) {
      let dateA = new Date(a.date), 
          dateB = new Date(b.date);
      return dateB - dateA;
    })
    return this.getResponsePromise(msgList)
  }

  getMessageById = (messageId) => {
    console.log("getting message", messageId)
    return this.getResponsePromise(
      this.messages.filter((msg) => (msg.id === messageId))[0]
    )
  }

  getCategoryById = async (categoryId) => {
    console.log("getting category", categoryId)
    let category = (categoryId === "all") 
      ? {
          id: "all",
          name: "All Messages"
        }
      : this.categories.filter((cat) => (cat.id === categoryId))[0]
    return await this.getResponsePromise(category)
  }

  deleteMessageById = async (messageId) => {
    console.log("deleting message")
    this.messages = this.messages.filter((msg) => (msg.id !== messageId))
    return await this.getResponsePromise(null)
  }

  updateMessageCategory = async (messageId, categoryId) => {
    console.log("updating message category")
    const msgObj = this.messages.find((msg) => (msg.id === messageId))
    msgObj["categoryId"] = categoryId
    return await this.getResponsePromise(null)
  }

  createNewMessage = async (msgData) => {
    console.log("creating new message")
    const msgObj = {
      id: Math.max(...this.messages.map((item)=>item.id)) + 1,
      from: {
        name: "React Programmer",
        address: "react.programmer@example.com"
      },
      to: {
        name: "Unknown",
        address: msgData.destination
      },
      categoryId: "sent",
      date: (new Date()).toISOString(),
      title: msgData.title,
      body: msgData.body
    }
    this.messages.push(msgObj)
    return await this.getResponsePromise(null)
  }
}

export default ApiService