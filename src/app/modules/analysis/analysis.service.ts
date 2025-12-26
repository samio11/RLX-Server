import { ERole } from "../user/user.interface";
import { User } from "../user/user.model";

const getAdminData = async () => {
  const [totalAdmin, totalUser, totalBlockedUser] = await Promise.all([
    User.countDocuments({ role: ERole.admin }),
    User.countDocuments({ role: ERole.user }),
    User.countDocuments({ isVerified: false }),
  ]);
  return { totalAdmin, totalUser, totalBlockedUser };
};

export const AdminServices = { getAdminData };
