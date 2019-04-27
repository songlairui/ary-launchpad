import './app.less'
import { Affix, Dropdown, Menu, Button, Icon, Divider } from 'ant-design-vue'

export default {
  data() {
    return {
      bottom: 50
    }
  },
  render() {
    return (
      <div id="app">
        <router-view />
        <Affix offsetBottom={this.bottom} class="body-affix">
          <Divider type="vertical" />
          <Dropdown trigger={['click']}>
            <Menu slot="overlay">
              <Menu.Item>
                <a target="rxjs" href="https://reactive.how/rxjs/">
                  模仿目标
                </a>
              </Menu.Item>
              <Menu.Item>
                <router-link to="/vue-cli-home">Home</router-link>
              </Menu.Item>
              <Menu.Item>
                <router-link to="/about">About</router-link>
              </Menu.Item>
              <Menu.Item>
                <router-link to="/launch-pad">LaunchPad</router-link>
              </Menu.Item>
            </Menu>
            <Button>
              Routers <Icon type="down" />
            </Button>
          </Dropdown>
        </Affix>
      </div>
    )
  }
}
