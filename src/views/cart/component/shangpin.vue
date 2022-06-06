<template>
  <div class="div">
    <div class="shangpin" v-for="(item, index) in cart" :key="index">
      <div
        v-if="item.status == 'true'"
        class="circle-choose"
        @click="Nchoose(index)"
      ></div>
      <div v-else class="circle" @click="choose(index)"></div>
      <img
        :src="
          require(`/Users/liuboshuo/Desktop/vue+node商城项目/supermall/src/views/category/img/${item.spname}.png`)
        "
        alt=""
      />
      <div class="right">
        <div class="title">
          {{ item.spname }}
        </div>
        <div class="price">¥{{ item.price }}</div>
        <div class="count">{{ item.type }}码 x{{ item.count }}</div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <div class="quanxuan">
        <div
          v-if="allchoose == 'true'"
          class="circle-choose"
          @click="Nqx"
        ></div>
        <div v-else class="circle" @click="qx"></div>
        <div class="qx-text">全选</div>
      </div>
      <div class="total">合计：¥{{ total }}</div>
      <div class="jisuan" @click="jisuan">去计算</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  name: "SupermallShangpin",

  data() {
    return {
      cart: [],
      total: 0,
      allchoose: "false",
    };
  },
  created() {
    axios
      .get("http://127.0.0.1/getcart", {
        params: {
          username: sessionStorage.getItem("username"),
        },
      })
      .then((res) => {
        this.cart = res.data;
      });
  },

  mounted() {},

  methods: {
    choose(index) {
      this.cart[index].status = "true";
      this.total =
        this.total +
        Number(this.cart[index].price) * Number(this.cart[index].count);
      let number = 0;
      for (let i = 0; i < this.cart.length; i++) {
        this.cart[i].status == "true"
          ? (number = number + 1)
          : (number = number + 0);
      }
      if (number == this.cart.length) {
        this.allchoose = "true";
      }
    },
    Nchoose(index) {
      this.cart[index].status = "false";
      this.total =
        this.total -
        Number(this.cart[index].price) * Number(this.cart[index].count);
      let number = 0;
      for (let i = 0; i < this.cart.length; i++) {
        this.cart[i].status == "true"
          ? (number = number + 1)
          : (number = number + 0);
      }
      if (number != this.cart.length) {
        this.allchoose = "false";
      }
    },
    jisuan() {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].status == "true") {
          axios
            .get("http://127.0.0.1/dingdan", {
              params: {
                username: sessionStorage.getItem("username"),
                spname: this.cart[i].spname,
                price: this.cart[i].price,
                count: this.cart[i].count,
                type: this.cart[i].type,
                address: this.cart[i].address,
                phone: this.cart[i].phone,
                people: this.cart[i].people,
              },
            })
            .then((res) => {
              axios
                .get("http://127.0.0.1/clear", {
                  params: {
                    id: this.cart[i].id,
                  },
                })
                .then((res) => {
                  this.$router.replace("/home");
                });
            });
        }
      }
    },
    qx() {
      for (let i = 0; i < this.cart.length; i++) {
        this.choose(i);
      }
    },
    Nqx() {
      for (let i = 0; i < this.cart.length; i++) {
        this.Nchoose(i);
      }
    },
  },
};
</script>

<style scoped>
.div {
  width: 100%;
}
.shangpin {
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 10px;
}
.circle-choose {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: var(--color-tint);
  margin: 0 10px;
}
.shangpin img {
  width: 70px;
  height: 90px;
  border-radius: 5px;
}
.right {
  width: 70%;
  height: 90px;
  padding: 0 10px;
  position: relative;
}
.right .title {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 17px;
}
.right .price {
  color: #e85e4f;
  position: absolute;
  bottom: 10%;
}
.right .count {
  color: #474747;
  position: absolute;
  bottom: 10%;
  right: 10%;
}
.bottom {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 49px;
  left: 0;
  background-color: #e3e3e3;
}
.quanxuan {
  width: 20%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.quanxuan .circle {
  width: 15px;
  height: 15px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 5px;
}
.quanxuan .circle-choose {
  width: 15px;
  height: 15px;
  background-color: var(--color-tint);
  border-radius: 50%;
  margin-right: 5px;
}
.total {
  width: 50%;
  display: flex;
  align-items: center;
}
.jisuan {
  width: 30%;
  background-color: #f54820;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eee;
}
</style>