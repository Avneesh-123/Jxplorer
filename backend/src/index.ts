import type { Core } from '@strapi/strapi';

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const publicRole = await strapi.db
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (!publicRole) return;

    const existing = await strapi.db
      .query('plugin::users-permissions.permission')
      .findOne({
        where: {
          role: publicRole.id,
          action: 'api::contact.contact.create',
        },
      });

    if (!existing) {
      await strapi.db.query('plugin::users-permissions.permission').create({
        data: {
          action: 'api::contact.contact.create',
          role: publicRole.id,
        },
      });
    }
  },
};
