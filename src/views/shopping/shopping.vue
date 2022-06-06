<template>
  <div class="shopping">
    <nav-bar class="navbar">
      <div slot="left" class="left">
        <img @click="back" src="./img/jiantou-fff.png" alt="" />
      </div>
    </nav-bar>
    <div class="head">
      <img
        :src="
          require(`/Users/liuboshuo/Desktop/vue+node商城项目/supermall/src/views/category/img/${name}.png`)
        "
        alt=""
      />
      <div>¥{{ price }}</div>
    </div>

    <div class="address">
      <div class="title">收货人：</div>
      <input type="text" v-model="people" />
    </div>

    <div class="address">
      <div class="title">配送地址：</div>
      <input type="text" v-model="address" />
    </div>

    <div class="address">
      <div class="title">联系电话：</div>
      <input type="number" v-model="phone" />
    </div>

    <div class="type">
      <div class="title">类型</div>
      <input type="radio" id="M" name="type" value="M" v-model="type" />M
      <input type="radio" id="L" name="type" value="L" v-model="type" />L
      <input type="radio" id="XL" name="type" value="XL" v-model="type" />XL
    </div>

    <div class="count">
      <div class="title">购买数量</div>
      <div class="jisuan">
        <button @click="reduce">-</button>
        <div>{{ count }}</div>
        <button @click="add">+</button>
      </div>
    </div>
    <div class="submit" @click="submit">确定</div>
    <div class="zzp"></div>
  </div>
</template>

<script>
import navBar from "../../components/common/navbar/NavBar.vue";
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  name: "SupermallShopping",

  data() {
    return {
      address: "",
      type: "L",
      count: 1,
      name: "",
      price: "",
      phone: '',
      people: ''
    };
  },
  components: {
    navBar,
  },
  created() {
    this.name = this.$route.query.name;
    this.price = this.$route.query.price;
  },

  mounted() {},

  methods: {
    back() {
      this.$router.back();
    },
    add() {
      this.count++;
    },
    reduce() {
      if (this.count <= 1) {
        this.count = 1;
      } else {
        this.count--;
      }
    },
    submit() {
      if (this.address == "") {
        Toast("请填写配送地址");
      } else {
        if (this.$route.query.type == "buy") {
          axios
            .get("http://127.0.0.1/dingdan", {
              params: {
                username: sessionStorage.getItem("username"),
                spname: this.name,
                price: this.price,
                count: this.count,
                type: this.type,
                address: this.address,
                phone: this.phone,
                people: this.people
              },
            })
            .then((res) => {
              Toast(res.data);
              this.$router.replace("/home");
            });
        } else if (this.$route.query.type == "add") {
          axios
            .get("http://127.0.0.1/cart", {
              params: {
                username: sessionStorage.getItem("username"),
                spname: this.name,
                price: this.price,
                count: this.count,
                type: this.type,
                address: this.address,
                phone: this.phone,
                people: this.people
              },
            })
            .then((res) => {
              Toast(res.data);
              this.$router.back();
            });
        } else {
          console.log("cw");
        }
      }
    },
  },
};
</script>

<style scoped>
.shopping {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.navbar {
  background-color: var(--color-tint);
  width: 100%;
}
.left {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar img {
  width: 20px;
}
.head {
  width: 98%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--color-tint);
  font-size: 20px;
  border-bottom: 1px solid #e6e6e6;
}
.head img {
  height: 80px;
  border-radius: 10px;
  margin: 10px 10px;
}
.address {
  width: 95%;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 20px;
  padding-top: 10px;
}
.address input {
  width: 100%;
}
.type {
  width: 95%;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 20px;
  padding-top: 10px;
}
.count {
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 20px;
  padding-top: 20px;
}
.jisuan {
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.jisuan button {
  width: 25px;
}
.title {
  color: var(--color-tint);
  margin-bottom: 10px;
  margin-top: 10px;
}
.submit {
  width: 95%;
  height: 30px;
  background-color: var(--color-tint);
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  position: fixed;
  bottom: 10px;
  z-index: 999;
}
.zzp {
  width: 100%;
  height: 58px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  z-index: 998;
}
</style>