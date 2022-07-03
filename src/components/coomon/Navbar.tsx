import { Anchor, Menu } from 'antd';
const { Link } = Anchor;

const Navbar = () => {
    return (
        <Menu style={{ display: 'flex', backgroundColor: '#bae7ff', padding: 20, margin: 0 }} defaultSelectedKeys={['mail']}>
            <Menu.Item style={{ listStyleType: 'none', marginRight: 10 }} key="Home">
                <Anchor>
                    <Link href="/" title="Home" />
                </Anchor>
            </Menu.Item>
            <Menu.Item style={{ listStyleType: 'none', marginRight: 10 }} key="Add">
                <Anchor>
                    <Link href="/add" title="Add Book" />
                </Anchor>
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;