# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171017205104) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "controllers", force: :cascade do |t|
    t.integer  "site_id"
    t.string   "name"
    t.string   "installed_on"
    t.boolean  "communications_enabled"
    t.string   "hub_settings"
    t.string   "ip_address"
    t.string   "communication_type"
    t.string   "communication_address"
    t.string   "controller_type"
    t.string   "share_et_from"
    t.string   "share_rain_from"
    t.boolean  "rain_polling"
    t.string   "latitude"
    t.string   "longitude"
    t.string   "notes"
    t.string   "part_number"
    t.string   "serial_number"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "customer_users", force: :cascade do |t|
    t.integer  "customer_id"
    t.integer  "user_id"
    t.integer  "role_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "customers", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "address"
    t.string   "address2"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.string   "time_zone"
    t.boolean  "is_contractor"
  end

  create_table "mainlines", force: :cascade do |t|
    t.string   "name"
    t.integer  "site_id"
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.boolean  "use_capacity"
    t.string   "capacity_with_pump"
    t.string   "capacity_without_pump"
    t.string   "break_during_irrigation"
    t.string   "break_during_override"
    t.string   "break_all_other_times"
    t.boolean  "compare_flow_rate"
    t.string   "flow_rate_1_to"
    t.string   "flow_rate_1_plus"
    t.string   "flow_rate_1_minus"
    t.string   "flow_rate_2_to"
    t.string   "flow_rate_2_plus"
    t.string   "flow_rate_2_minus"
    t.string   "flow_rate_3_to"
    t.string   "flow_rate_3_plus"
    t.string   "flow_rate_3_minus"
    t.string   "flow_rate_4_plus"
    t.string   "flow_rate_4_minus"
    t.boolean  "sunday_override_open"
    t.string   "sunday_override_open_time"
    t.boolean  "sunday_override_close"
    t.string   "sunday_override_close_time"
    t.boolean  "monday_override_open"
    t.string   "monday_override_open_time"
    t.boolean  "monday_override_close"
    t.string   "monday_override_close_time"
    t.boolean  "tuesday_override_open"
    t.string   "tuesday_override_open_time"
    t.boolean  "tuesday_override_close"
    t.string   "tuesday_override_close_time"
    t.boolean  "wednesday_override_open"
    t.string   "wednesday_override_open_time"
    t.boolean  "wednesday_override_close"
    t.string   "wednesday_override_close_time"
    t.boolean  "thursday_override_open"
    t.string   "thursday_override_open_time"
    t.boolean  "thursday_override_close"
    t.string   "thursday_override_close_time"
    t.boolean  "friday_override_open"
    t.string   "friday_override_open_time"
    t.boolean  "friday_override_close"
    t.string   "friday_override_close_time"
    t.boolean  "saturday_override_open"
    t.string   "saturday_override_open_time"
    t.boolean  "saturday_override_close"
    t.string   "saturday_override_close_time"
  end

  create_table "mangs", force: :cascade do |t|
    t.string   "email"
    t.string   "encrypted_password",          default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.string   "reset_password_redirect_url"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",               default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "confirm_success_url"
    t.string   "unconfirmed_email"
    t.string   "name"
    t.string   "nickname"
    t.string   "image"
    t.string   "provider"
    t.string   "uid",                         default: "", null: false
    t.text     "tokens"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "favorite_color"
  end

  add_index "mangs", ["email"], name: "index_mangs_on_email", using: :btree
  add_index "mangs", ["reset_password_token"], name: "index_mangs_on_reset_password_token", unique: true, using: :btree
  add_index "mangs", ["uid"], name: "index_mangs_on_uid", unique: true, using: :btree

  create_table "permissions", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "point_of_connections", force: :cascade do |t|
    t.string   "poc_type"
    t.integer  "mainline_id"
    t.string   "poc_used_for"
    t.string   "flow_meter"
    t.string   "master_valve"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "name"
    t.integer  "controller_id"
  end

  create_table "role_permissions", force: :cascade do |t|
    t.integer  "role_id"
    t.integer  "permission_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "roles", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sites", force: :cascade do |t|
    t.string   "name"
    t.integer  "customer_id"
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.string   "site_type"
    t.string   "site_id"
    t.string   "controller_serial_number"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "encrypted_password",          default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.string   "reset_password_redirect_url"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",               default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "confirm_success_url"
    t.string   "unconfirmed_email"
    t.string   "name"
    t.string   "nickname"
    t.string   "image"
    t.string   "provider"
    t.string   "uid",                         default: "",    null: false
    t.text     "tokens"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "favorite_color"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "phone"
    t.boolean  "primary_contact",             default: false
    t.string   "language"
    t.string   "report_sort_order"
    t.string   "homepage"
    t.string   "time_zone"
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  add_index "users", ["uid"], name: "index_users_on_uid", unique: true, using: :btree

end
