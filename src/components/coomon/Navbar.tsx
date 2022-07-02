import { Anchor, Menu } from 'antd';
const { Link } = Anchor;
const Navbar = () => {
    return (
        <Menu style={{ display: 'flex', backgroundColor: '#bae7ff', padding: 20 }} defaultSelectedKeys={['mail']}>
            <Menu.Item style={{ listStyleType: 'none', marginRight: 10 }} key="Home">
                <Anchor>
                    <Link href="/" title="Home" />
                </Anchor>
            </Menu.Item>
            <Menu.Item style={{ listStyleType: 'none', marginRight: 10 }} key="Add">
                <Anchor>
                    <Link href="/add" title="Add" />
                </Anchor>
            </Menu.Item>
            <Menu.Item style={{ listStyleType: 'none', marginRight: 10 }} key="service">
                <Anchor>
                    <Link href="#" title="Service" />
                </Anchor>
            </Menu.Item>
            <Menu.Item style={{ listStyleType: 'none', marginRight: 10 }} key="contact">
                <Anchor>
                    <Link href="#" title="Conatct" />
                </Anchor>
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;