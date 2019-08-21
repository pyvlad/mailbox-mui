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
    let msgList = this.messages
    if (categoryId !== "all") {
      msgList = this.messages.filter(msg => msg.categoryId === categoryId)
    }
    msgList.sort(function(a, b) {
      let dateA = new Date(a.date), 
          dateB = new Date(b.date);
      return dateB - dateA;
    })
    let promise = new Promise(
      function(resolve, reject) {
        setTimeout(() => resolve(msgList), 1000)
      }
    )
    return promise
  }

  getMessageById = (messageId) => {
    return this.messages.filter((msg) => (msg.id === messageId))[0]
  }

  getCategoryById = (categoryId) => {
    if (categoryId === "all") {
      return {
        id: "all",
        name: "All Messages"
      }
    }
    return this.categories.filter((cat) => (cat.id === categoryId))[0]
  }

  deleteMessageById = (messageId) => {
    this.messages = this.messages.filter((msg) => (msg.id !== messageId))
  }

  updateMessageCategory = (messageId, categoryId) => {
    const msgObj = this.messages.find((msg) => (msg.id === messageId))
    msgObj["categoryId"] = categoryId
  }

  createNewMessage = (msgData) => {
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
  }
}

export default ApiService