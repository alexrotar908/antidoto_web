import { useLocation } from 'react-router-dom';

const ADMIN_KEY = 'antidotoSuperClave2024';

export default function useAdminKey() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const key = params.get('key');
  return key === ADMIN_KEY;
}
