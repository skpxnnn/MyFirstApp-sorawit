import { createStore } from 'vuex';

const store = createStore({
  state() {
    // Load memories from localStorage, or use default values if none exist
    const storedMemories = localStorage.getItem('memories');
    return {
      memories: storedMemories ? JSON.parse(storedMemories) : [
        {
            id: "m1",
            image: "https://files.gqthailand.com/uploads/c2310.jpg",
            title: "การท่องเที่ยว",
            description: "Camp Nou",
          },
          {
            id: "m2",
            image: "https://www.shutterstock.com/image-photo/football-player-kicking-ball-on-260nw-1028332132.jpg",
            title: "การออกกำลังกาย",
            description: "เล่นบอล",
          },
          {
            id: "m3",
            image: "https://bangkokpattayahospital.com/wp-content/uploads/2019/02/k2_items_src_d534ab70f9253b9cce832791c17b66ff-1024x538.jpg",
            title: "การนอน",
            description: "นอนไม่เกิน 5 ทุ่ม",
          },
          {
            id: "m4",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5UEHS433-LGodo3ALCLkHV6uGRhPwD7gdA&s",
            title: "การใช้จ่ายเงิน",
            description: "เก็บออมเดือนละ 1,500",
          },  
        ] 
    } // Default memories if localStorage is empty
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
      // Persist the updated memories list to localStorage
      localStorage.setItem('memories', JSON.stringify(state.memories));
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memoryById(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;